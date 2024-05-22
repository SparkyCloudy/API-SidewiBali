const express = require("express");
const router = express.Router();
const AkunController = require("../controllers/akun");
const DesaWisataController = require("../controllers/desawisata");
const AssetDesaController = require("../controllers/assetdesa");
const AssetDestinasiController = require("../controllers/assetdestinasi");
const AkomodasiController = require("../controllers/akomodasi");
const DestinasiWisataController = require("../controllers/destinasiwisata");
const KategoriDestinasiController = require("../controllers/kategoridestinasi");
const AdminDesaController = require("../controllers/admindesa");
const NotifikasiController = require("../controllers/notifikasi");
const InformasiController = require("../controllers/informasi");
const {checkAuth} = require("../middleware/checkAuth");
const upload = require('../../config/multerConfig');


// Akun
router.post("/akun/login", AkunController.login );
/* upload('akun')-> upload ke folder Akun
single('foto')-> Field yang berisi file */
router.post("/akun/add", upload('akun').single('foto'), AkunController.postAkun);
router.delete("/akun/logout",checkAuth, AkunController.logout );
router.get("/akun",checkAuth, AkunController.getAllAkun );
router.get("/akun/:id_akun",checkAuth, AkunController.getOneAkun );
router.patch("/akun/:id_akun",checkAuth,upload('akun').single('foto'), AkunController.updateAkun);
router.delete("/akun/:id_akun",checkAuth, AkunController.deleteAkun );

// Desa wisata
router.post("/desawisata/add",upload('desawisata').single('gambar'), DesaWisataController.postDesaWisata);
router.patch("/desawisata/:id",upload('desawisata').single('gambar'), DesaWisataController.updateDesaWisata);
router.delete("/desawisata/:id", DesaWisataController.deleteDesaWisata );
router.get("/desawisata/:id", DesaWisataController.getOneDesaWisata );
router.get("/desawisata", DesaWisataController.getAllDesaWisata );

// Asset Desa
router.post("/assetdesa/add",upload('assetdesa').single('link'), AssetDesaController.postAssetDesa);
router.patch("/assetdesa/:id",upload('assetdesa').single('link'), AssetDesaController.updateAssetDesa);
router.delete("/assetdesa/:id", AssetDesaController.deleteAssetDesa );
router.get("/assetdesa/:id", AssetDesaController.getOneAssetDesa );
router.get("/assetdesa/desa/:id", AssetDesaController.getAssetDesaByIdDesa );
router.get("/assetdesa", AssetDesaController.getAllAssetDesa );

// Akomodasi
router.post("/akomodasi/add",upload('akomodasi').single('gambar'), AkomodasiController.postAkomodasi);
router.patch("/akomodasi/:id",upload('akomodasi').single('gambar'), AkomodasiController.updateAkomodasi);
router.delete("/akomodasi/:id", AkomodasiController.deleteAkomodasi );
router.get("/akomodasi/:id", AkomodasiController.getOneAkomodasi );
router.get("/akomodasi/desa/:id", AkomodasiController.getAkomodasiByIdDesa );
router.get("/akomodasi", AkomodasiController.getAllAkomodasi );

// Kategori Destinasi
router.post("/kategoridestinasi/add", KategoriDestinasiController.postKategoriDestinasi);
router.get("/kategoridestinasi/:id", KategoriDestinasiController.getOneKategoriDestinasi );
router.get("/kategoridestinasi", KategoriDestinasiController.getAllKategoriDestinasi );
router.patch("/kategoridestinasi/:id", KategoriDestinasiController.updateKategoriDestinasi);
router.delete("/kategoridestinasi/:id", KategoriDestinasiController.deleteKategoriDestinasi );

// Admin desa
router.post("/admindesa/add", AdminDesaController.postAdminDesa);
router.get("/admindesa/:id", AdminDesaController.getOneAdminDesa );
router.get("/admindesa/akun/:id", AdminDesaController.getAdminDesaByIdAkun );
router.get("/admindesa", AdminDesaController.getAllAdminDesa );
router.patch("/admindesa/:id", AdminDesaController.updateAdminDesa);
router.delete("/admindesa/:id", AdminDesaController.deleteAdminDesa );

// Notifikasi
router.post("/notifikasi/add", NotifikasiController.postNotifikasi);
router.get("/notifikasi/:id", NotifikasiController.getOneNotifikasi );
router.get("/notifikasi", NotifikasiController.getAllNotifikasi );
router.patch("/notifikasi/:id", NotifikasiController.updateNotifikasi);
router.delete("/notifikasi/:id", NotifikasiController.deleteNotifikasi );

// Destinasi wisata
router.post("/destinasiwisata/add",upload('destinasiwisata').single('gambar'), DestinasiWisataController.postDestinasiWisata);
router.patch("/destinasiwisata/:id",upload('destinasiwisata').single('gambar'), DestinasiWisataController.updateDestinasiWisata);
router.delete("/destinasiwisata/:id", DestinasiWisataController.deleteDestinasiWisata );
router.get("/destinasiwisata/:id", DestinasiWisataController.getOneDestinasiWisata );
router.get("/destinasiwisata", DestinasiWisataController.getAllDestinasiWisata );

// Asset Destinasi
router.post("/assetDestinasi/add",upload('assetDestinasi').single('link'), AssetDestinasiController.postAssetDestinasi);
router.patch("/assetDestinasi/:id",upload('assetDestinasi').single('link'), AssetDestinasiController.updateAssetDestinasi);
router.delete("/assetDestinasi/:id", AssetDestinasiController.deleteAssetDestinasi );
router.get("/assetDestinasi/:id", AssetDestinasiController.getOneAssetDestinasi );
router.get("/assetDestinasi/destinasi/:id", AssetDestinasiController.getAssetDestinasiByIdDesa );
router.get("/assetDestinasi", AssetDestinasiController.getAllAssetDestinasi );

// Informasi
router.post("/informasi/add",upload('informasi').single('gambar'), InformasiController.postInformasi);
router.patch("/informasi/:id",upload('informasi').single('gambar'), InformasiController.updateInformasi);
router.delete("/informasi/:id", InformasiController.deleteInformasi );
router.get("/informasi/:id", InformasiController.getOneInformasi );
router.get("/informasi", InformasiController.getAllInformasi );

// Export
module.exports = router;
