var mongoose = require('mongoose');
var AlamatSchema = new mongoose.Schema({
    kecamatan : {type:'String'},
    desa : {type:'String'},
    kabupaten : {type:'String'},
    provinsi : {type:'String'},
    negara : {type:'String'},
    Nomorhp : {type:'String'},
    Kodepos : {type:'String'},
    Id_user : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
});
module.exports = mongoose.model('Alamat', AlamatSchema);