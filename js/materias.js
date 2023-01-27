var materias = [
  {id: 1023, name: 'Matematica Discreta', creditos: 9, Cat: 0},
  {id: 1025, name: 'Probabilidad y Estadistica', creditos: 10, Cat: 0, Req: [{courseReq: "1062", examReq: "1030&&1061"}]},
  {id: 1026, name: 'Matematica Discreta 2', creditos: 9, Cat: 0, Req: [{courseReq: "1023&&1030"}]},
  {id: 1027, name: 'Logica', creditos: 12, Cat: 0, Req: [{courseReq: "1023"}]},
  {id: 1030, name: 'Geometria y Algebra Lineal 1', creditos: 9, Cat: 0},
  {id: 1031, name: 'Geometria y Algebra Lineal 2', creditos: 9, Cat: 0, Req: [{courseReq: "1030"}]},
  {id: 1033, name: 'Metodos Numericos', creditos: 8, Cat: 6, Req: [{examReq: "1062&&1322&&1031&&1030&&1061"}]},
  {id: 1061, name: 'Calculo DIV', creditos: 13, Cat: 0},
  {id: 1062, name: 'Calculo DIVV', creditos: 13, Cat: 0, Req: [{courseReq: "1061"}]},
  {id: 1063, name: 'Calculo Vectorial', creditos: 10, Cat: 0, Req: [{courseReq: "1062", examReq: "1061&&1030"}]},
  {id: 1064, name: 'Introduccion a las ecuaciones diferenciales', creditos: 10, Cat: 0, Req: [{courseReq: "1062", examReq: "1030&&1061&&1031"}]},
  {id: 1131, name: 'Introduccion a la fisica moderna', creditos: 10, Cat: 1, Req: [{examReq: "1153"}]},
  {id: 1151, name: 'Fisica 1', Cat: 1, creditos: 10},
  {id: 1152, name: 'Fisica 2', creditos: 10, Cat: 1, Req: [{courseReq: "1061&&1151"}]},
  {id: 1153, name: 'Fisica 3', creditos: 10, Cat: 1, Req: [{courseReq: "1061&&1151&&1152"}, {courseReq: "1061", examReq: "1151"}]},
  {id: 1216, name: 'Taller Encarare: Crear', creditos: 8, Req: [{credReq: 250}]},
  {id: 1224, name: 'Economia', creditos: 7, Cat: 11},
  {id: 1225, name: 'Politicas Cientificas', Cat: 11, creditos: 3},
  {id: 1316, name: 'Introduccion a la computacion grafica', Cat: 2, creditos: 10, Req: [{courseReq: "1031", examReq: "1323&&1030&&1324"}]},
  {id: 1321, name: 'Programación 2', creditos: 12, Cat: 2, Req: [{courseReq: "1322"}]},
  {id: 1322, name: 'Programación 1', creditos: 10, Cat: 2,},
  {id: 1323, name: 'Programación 3', creditos: 15, Cat: 2, Req: [{courseReq: "1321", examReq: "1322&&1023"}]},
  {id: 1324, name: 'Programación 4', creditos: 15, Cat: 2, Req: [{examReq: "1030&&1061&&1023&&1321"}]},
  {id: 1325, name: 'Teoria de Lenguajes', creditos: 12, Cat: 2, Req: [{courseReq: "1323", examReq: "1027&&1023&&1061&&1030"}]},
  {id: 1327, name: 'Taller de Programación', creditos: 15, Cat: 10, Req: [{examReq: "1324"}, {courseReq: "1324", examReq: "1323"}]},
  {id: 1340, name: 'Programación Logica', creditos: 10, Cat: 2, Req: [{examReq: "1027&&1323&&1325&&1026"}]},
  {id: 1347, name: 'Const. Formal de prog. En teoria de tipos', creditos: 12, Cat: 2, Req: [{courseReq: "1340||1354", examReq: "1027"}]},
  {id: 1349, name: 'Computacion grafica avanzada', creditos: 12, Cat: 2, Req: [{courseReq: "1316"}]},
  {id: 1350, name: 'Programación funcional avanzada', creditos: 12, Cat: 2, Req: [{courseReq: "1354"}]},
  {id: 1353, name: 'DIDACTICA DE ALGORIT.Y ESTRUCT.DE DATOS', creditos: 7, Cat: 2, Req: [{examReq: "1322&&1321"}]},
  {id: 1354, name: 'Programación funcional', creditos: 10, Cat: 2, Req: [{examReq: "1321&&1027&&1325&&1023"}]},
  {id: 1355, name: 'Complejidad Computacional', creditos: 9, Cat: 2, Req: [{courseReq: "1325", examReq: "1323"}]},
  {id: 1437, name: 'Taller de Seguridad Informatica', creditos: 7, Cat: 3, Req: [{courseReq: "1446", examReq: "1323&&1911"}]},
  {id: 1438, name: 'Aplicacion de teoria de la inf. Al Proc. De Imag.', creditos: 6, Req: [{examReq: "1025"}]},
  {id: 1440, name: 'Analisis y diseño de algorit. Distrib. En redes', Cat: 3, creditos: 8, Req: [{examReq: "1323&&1446"}]},
  {id: 1443, name: 'Arquitectura de Computadoras', creditos: 12, Cat: 3, Req: [{courseReq: "1023&&1027&&1321", examReq: "1322&&1061"}]},
  {id: 1446, name: 'Redes de Computadoras', creditos: 12, Cat: 3, Req: [{courseReq: "1443&&1537", examReq: "1323&&1061"}]},
  {id: 1447, name: 'Comput. de Pr. Gral. En unid. De proc. Graf.', Cat: 3, creditos: 7, Req: [{courseReq: "1324", examReq: "1443&&1323"}]},
  {id: 1448, name: 'Aspectos Avanz. De Redes de Computadoras', Cat: 3, creditos: 8, Req: [{courseReq: "1446"}]},
  {id: 1510, name: 'Control de Calidad', creditos: 8, Cat: 9, Req: [{courseReq: "1025", credReq: 80}]},
  {id: 1537, name: 'Sistemas Operativos', creditos: 12, Cat: 3, Req: [{courseReq: "1443", examReq: "1321&&1061&&1030&&1023"}]},
  {id: 1543, name: 'Int. Al negocio del software', creditos: 6, Cat: 9, Req: [{courseReq: "1716"}]},
  {id: 1610, name: 'Int. A la Investigación de operaciones', creditos: 10, Cat: 7, Req: [{examReq: "1030&&1061&&1062&&1025&&1031"}]},
  {id: 1624, name: 'Modelado y Optimizacion', creditos: 6, Cat: 7, Req: [{examReq: "1610"}]},
  {id: 1631, name: 'Fundamentos de Programación entera', creditos: 8, Cat: 7, Req: [{examReq: "1610"}]},
  {id: 1633, name: 'Teoria, Algorit. Y aplic. De Gest. Logis', creditos: 8, Cat: 7, Req: [{courseReq: "1631||1624"}]},
  {id: 1634, name: 'Analisis de datos en redes complejas', creditos: 10, Cat: 7, Req: [{courseReq: "1610"}]},
  {id: 1637, name: 'Algoritmos Evolutivos', creditos: 10, Cat: 7, Req: [{examReq: "1324&&1610&&1025"}]},
  {id: 1640, name: 'Optimizacion continua y aplicaciones', creditos: 10, Cat: 7, Req: [{examReq: "1610"}]},
  {id: 1716, name: 'Int. a la ingenieria de software', creditos: 10, Cat: 8, Req: [{courseReq: "1911&&1324&&1327"}]},
  {id: 1721, name: 'Proyecto de ingenieria de software', creditos: 15, Cat: 10, Req: [{courseReq: "1716", examReq: "1324"}]},
  {id: 1730, name: 'Proyecto de grado', creditos: 30, Cat: 10, Req: [{credReq: 380},{courseReq: "1537&&1327&&1911&&1610&&1323&&1716&&1033&&1325&&1721&&1324&&1443", credReq: 365}]},
  {id: 1742, name: 'Taller de verificacion del software', creditos: 8, Cat: 8, Req: [{courseReq: "1716", examReq: "1911"}]},

  {id: 1911, name: 'Fundamentos de Bases de datos', creditos: 15, Cat: 5, Req: [{examReq: "1323&&1027&&1026"}]},
  {id: 1918, name: 'Administracion y seguridad de sistemas', creditos: 10, Cat: 5, Req: [{courseReq: "1716&&1911&&1537&&1446", examReq: "1443"}]},
  {id: 1936, name: 'Int. A los sist. De infor. Geografica', creditos: 10, Cat: 5, Req: [{courseReq: "1327", examReq: "1911&&1324"}]},
  {id: 1933, name: 'Tecnicas avanzadas para la gest. De sist. De inf.', creditos: 15, Cat: 5, Req: [{courseReq: "1446", examReq: "1911"}]},
  {id: 1938, name: 'Recup. De Inf. Y Recomend. En la web (WIR)', creditos: 10, Cat: 5, Req: [{examReq: "1911&&1323"}]},
  {id: 1941, name: 'Integracion de datos', creditos: 8, Cat: 5, Req: [{examReq: "1911", credReq: 250}]},
  {id: 1944, name: 'Administracion general para Ingenieros', creditos: 5, Cat: 9, Req: [{credReq: 140}]},
  {id: 1945, name: 'Practica de Administracion para Ingenieros', creditos: 5, Cat: 9, Req: [{courseReq: "1944"}]},
  {id: 1947, name: 'Taller de leng. Y tec. De la web semantica', creditos: 10, Cat: 5, Req: [{courseReq: "1911&&1446"}]},
  {id: 1948, name: 'Int. al middleware', creditos: 10, Cat: 5, Req: [{courseReq: "1327&&1446&&1716", examReq: "1911&&1537"}]},
  {id: 1951, name: 'Taller: Herramientas para la innovacion', creditos: 4},
  {id: 1952, name: 'Taller de sistemas ciber-fisicos', creditos: 6, Cat: 3, Req: [{courseReq: "1446", examReq: "1537&&1443", credReq: 200}]},
  {id: 2040, name: 'Iniciacion a la prod. Audiovis. Y multimedia', creditos: 6},
  {id: 2216, name: 'Tutoria entre pares 1', creditos: 4},
  {id: 2217, name: 'Tutoria entre pares 2', creditos: 4, Req: [{examReq: "2216"}]}
];

//{id: , name: '', creditos: 0, Cat: 0, Req: [{courseReq: "", examReq: "", credReq: 0}]}
//0: Matematica
//1: Ciencias Experimentales
//2: PROGRAMACION
//3: Arquitectura, Sistemas Operativos y Redes de computadores
//4: Inteligencia Artificial y Robótica
//5: Bases de Datos y Sistemas de Información
//6: Cálculo Numérico y Simbólico
//7: Investigación Operativa
//8: Ingeniería de Software
//9: Gestión en Organizaciones
//10: Actividades Integradoras : Talleres, pasa talleres, pasantías y proyectos
//11: Ciencias Humanas y Sociales
