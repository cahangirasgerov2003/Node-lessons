const makeFile = (callBack) => {
  const fileArg = {
    fileName: "Myfile",
  };
  console.log("Dosya olusduruldu!");
  callBack(fileArg);
};

makeFile((returnFile) => {
  console.log(`${returnFile.fileName} adli fayl olusdurulacaq!`);
});
