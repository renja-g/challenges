function getPlatform(server) {
   switch (server) {
      case "br":
         return "br1";

      case "euw":
         return "euw1";

      case "eune":
         return "eun1";

      case "jp":
         return "jp1";

      case "lan":
         return "la1";

      case "las":
         return "la2";

      case "na":
         return "na1";

      case "oc":
         return "oc1";

      case "tr":
         return "tr1";

      case "ph":
         return "ph2";

      case "sg":
         return "sg2";

      case "th":
         return "th2";

      case "tw":
         return "tw2";

      case "vn":
         return "vn2";

      /**
       * RU and KR does not have different platformIds
       */
      case "ru":
      case "kr":
         break;


      default:
         break;
   }
   return server;
}


const serversBeautified = [
   "br",
   "euw",
   "eune",
   "jp",
   "kr",
   "lan",
   "las",
   "na",
   "oc",
   "ph",
   "ru",
   "sg",
   "th",
   "tr",
   "tw",
   "vn"
];


const serversRaw = [
   "br1",
   "euw1",
   "eun1",
   "jp1",
   "kr",
   "la1",
   "la2",
   "na1",
   "oc1",
   "ph2",
   "ru",
   "sg2",
   "th2",
   "tr1",
   "tw2",
   "vn2"
];


export default getPlatform;
export { serversBeautified, serversRaw };