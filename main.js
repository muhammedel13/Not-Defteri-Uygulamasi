const electron = require("electron");
const url = require("url");
const path = require("path");
const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  console.log(process.platform);

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "main.html"),
    protocol: "file:",
    slashes: true
  }));

  const mainMenuTemplate = [
    {
      label: "Dosya",
      submenu: [
        {
          label: "Yeni sekme",
          accelerator: "CmdOrCtrl+N",
          click: () => {
            console.log("Yeni sekme açıldı.");
            // Yeni sekmeyle ilgili yapılacak işlemleri buraya yazabilirsiniz
          }
        },
        {
          label: "Yeni pencere",
          accelerator: "CmdOrCtrl+Shift",
          click: () => {
            console.log("Yeni pencere açıldı.");

            // Yeni pencereyle ilgili yapılacak işlemleri buraya yazabilirsiniz
          }
        },
        {
          label: "Aç",
          accelerator: "Ctrl+O",
          click: () => {
            console.log("açma işlemi yapıldı.");

            // Açma işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Kaydet",
          accelerator: "Ctrl+S",
          click: () => {
            console.log("notlar kaydedildi.");
            // Kaydetme işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Farklı Kaydet",
          accelerator: "Ctrl+Shift+S",
          click: () => {
            console.log("Farklı kaydetme işlemi yapıldı.");

            // Farklı kaydetme işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Tümünü Kaydet",
          accelerator: "Ctrl+Alt+S",
          click: () => {
            console.log("Tümünü kaydetme işlemi yapıldı.");

            // Tümünü kaydetme işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Yazdır",
          accelerator: "Ctrl+P",
          click: () => {
            console.log("Yazdırma işlemi yapıldı.");
            // Yazdırma işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Sekmeyi kapat",
          accelerator: "Ctrl+W",
          click: () => {
            console.log("Sekme kapatıldı.");
            // Sekmeyi kapatma işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Pencereyi kapat",
          accelerator: "Ctrl+Shift+W",
          click: () => {
            console.log("Pencere kapama işlemi yapıldı.");

            // Pencereyi kapatma işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Çıkış",
          role: "quit"
        }
      ]
    },
    {
      label: "Düzenle",
      submenu: [
        {
          label: "Geri al",
          accelerator: "Ctrl+Z",
          click: () => {
            console.log("Geri alma işlemi yapıldı.");
            // Geri alma işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Kes",
          accelerator: "Ctrl+X",
          click: () => {
            console.log("Kesme işlemi yapıldı.");

            // Kesme işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Kopyala",
          accelerator: "Ctrl+C",
          click: () => {
            console.log("Kopyalama işlemi yapıldı.");
            // Kopyalama işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Bul",
          accelerator: "Ctrl+F",
          click: () => {
            // Bulma işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Değiştir",
          accelerator: "Ctrl+H",
          click: () => {
            console.log("Değiştirme işlemi yapıldı.");
            // Değiştirme işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Git",
          accelerator: "Ctrl+G",
          click: () => {
            // Gitme işlemlerini buraya yazabilirsiniz
          }
        },
        {
          label: "Tümünü Seç",
          accelerator: "Ctrl+A",
          click: () => {
            console.log("Tümünü seçme işlemi yapıldı.");
            // Tümünü seçme işlemlerini buraya yazabilirsiniz
          }
        }
      ]
    }
  ];

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

