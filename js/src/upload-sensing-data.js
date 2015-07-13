/*
 * JobServiceID:
 * urn:moat:${APPID}:ssxls:upload-sensing-data:1.0.0
 * Description:Saving sensor data in the database.
 */

var TAG = 'upload-sensing-data';

var moat = require('moat'),
    context = moat.init(),
    session = context.session,
    clientRequest = context.clientRequest,
    database = context.database;

session.log(TAG, 'Start!');

var objects = clientRequest.objects;
var size = objects.length;

session.log(TAG, 'ClientRequest.objects = ' + JSON.stringify(objects));

if (size === 0) {
  session.log('No objects are received');
  throw 'No objects are received!';
}

//Store the data into database
for (var i = 0; i < size; i++) {
  var container = objects[i];
  session.log(TAG, JSON.stringify(container));
  save(session, database, container);
}

//Store the given model object into the database
function save(session, database, entity) {
  var result;
  if (entity.uid) {
    //try to find
    var array = database.queryByUids('SensingData', [entity.uid]);
    if (array && array.length > 0) {
      //Copy revision
      entity.rev = array[0].rev;
    } else {
      result = database.insert(entity);
    }
  } else {
    result = database.insert(entity);
  }
  //The inserted object is internally associated with the device where the data origins.
  session.log(TAG, 'The object@uid:' + result.uid + 'has been saved to the database.');
}
