
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (loubaiCommon == null) var loubaiCommon = {};
loubaiCommon._path = 'http://gz.mytophome.com/dwr/';
loubaiCommon.queryFacility = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'queryFacility', p0, callback);
}
loubaiCommon.getAllBuilding = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getAllBuilding', p0, callback);
}
loubaiCommon.getEstateId = function(callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getEstateId', callback);
}
loubaiCommon.setEstateId = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'setEstateId', p0, callback);
}
loubaiCommon.getEstateAlbum = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getEstateAlbum', p0, callback);
}
loubaiCommon.getWikiEstateAgentMap = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getWikiEstateAgentMap', p0, callback);
}
loubaiCommon.getPermoteProp = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getPermoteProp', p0, callback);
}
loubaiCommon.getDeaInfo = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getDeaInfo', p0, callback);
}
loubaiCommon.getEstateInfo = function(p0, p1, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getEstateInfo', p0, p1, callback);
}
loubaiCommon.getOtherEstate = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getOtherEstate', p0, callback);
}
loubaiCommon.getSamePriceEstate = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getSamePriceEstate', p0, callback);
}
loubaiCommon.getHotEstate = function(p0, p1, p2, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getHotEstate', p0, p1, p2, callback);
}
loubaiCommon.getEstateMap = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getEstateMap', p0, callback);
}
loubaiCommon.searchPropJournal = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'searchPropJournal', p0, callback);
}
loubaiCommon.getAskInfo = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getAskInfo', p0, callback);
}
loubaiCommon.getCountInfo = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getCountInfo', p0, callback);
}
loubaiCommon.setEstateJournalUseFul = function(p0, p1, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'setEstateJournalUseFul', p0, p1, false, callback);
}
loubaiCommon.getEstateJournaldp = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getEstateJournaldp', p0, callback);
}
loubaiCommon.getNewEstateJournal = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getNewEstateJournal', p0, callback);
}
loubaiCommon.getZTAskInfo = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getZTAskInfo', p0, callback);
}
loubaiCommon.getIndexEstateAgent = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getIndexEstateAgent', p0, callback);
}
loubaiCommon.getAlbumLogoByEstateId = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getAlbumLogoByEstateId', p0, callback);
}
loubaiCommon.getSubAreaEstate = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getSubAreaEstate', p0, callback);
}
loubaiCommon.setLoubaiCommonService = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'setLoubaiCommonService', p0, callback);
}
loubaiCommon.getZTLM1 = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getZTLM1', p0, false, callback);
}
loubaiCommon.getZTLM2 = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getZTLM2', p0, false, callback);
}
loubaiCommon.getZTLM3 = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getZTLM3', p0, false, callback);
}
loubaiCommon.getZTLM4 = function(p0, callback) {
  dwr.engine._execute(loubaiCommon._path, 'loubaiCommon', 'getZTLM4', p0, false, callback);
}
