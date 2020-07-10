map.load_stars = function() {
    
    //this.stars[#index] = new star( x, y, z, "Name", "Type", "Terrain", "TravelTime", {reachableornot 0/1}, {presentornot 0/1} );
    this.stars[0] = new star( -60, 50, 0, "Karideph", "G2", "8", "6", 1, 0, "<p>This world is one of the most wildly overpopulated planets in the galaxy. Essentially, it is one giant city, and the number of creatures that live upon it is not entirely comprehensible to the Human mind. You know the inhabitants are bug-like, and the entire planet is akin to one giant corellian ant hill.</p><p>The surface of Karideph is covered by endless rows of carefully tilled gardens, tilled with tightly-crowded plants. There is neither wilderness nor any wildlile left anywhere; every centimeter of land is in some way cultivated. Even the sides of the mountain ranges are terraced from top to bottom, and the sea is as carefully tended as are the fields.</p><p>The planet is dotted with a number of enormous cities, with buildings so tall that their upper extents need to be pressurized. Despite the size oi these buildings, however, most of the Kari live underground, in huge tunnel systems which criss-cross the planet. Many of the Kari have never seen the light of day, living and working entirely within the teeming warrens. The Kari have dug some of their tunnels as far as 12 kilometers in depth, nearly breaking through the planet's crust to its mantle.</p>");
    this.stars[1] = new star( -23.1, -19.18, -53.76, "Alpha Centauri A", "G2", "6", "9", 1, 0 );
    this.stars[2] = new star(/* -23.1, -19.18, -53.76, "Alpha Centauri B", "K0", "0", "0", 0, 0 */);
    this.stars[3] = new star(/* -21.56, -16.38, -52.5, "Proxima Centauri C", "M5.5", "0", "0", 0, 0 */);
    this.stars[4] = new star( -0.98, -102.88, 6.86, "Adarlon", "Temperate", "Mountains", "1", 1, 0, "<p>Adarlon was a rugged, mountainous world originally colonized by a group of Republic altruists—many from Alderaan—for its beauty rather than its resources. They were particularly well-funded, and their society grew into one focused on entertainment rather than survival. It soon became the sector's entertainment capital, and one of the galaxy's most prominent centers for tourism and the entertainment industry.</p><p>At about 3 ABY, the planet suffered a massive ecological disaster and is struggling to avoid famine.</p>" );
    this.stars[5] = new star( -104.16, 29.82, 13.3, "Wolf 359  ", "M6", "4", "6", 1, 0 );
    this.stars[6] = new star( -91.28, 23.1, 68.32, "Lalande 21185  ", "M2", "1", "8", 1, 0 );
    this.stars[7] = new star( -20.54, 233.12, -34.58, "Pergitor", "Breath Mask Required", "Volcanoes, Ash deserts, Formerly Rainforests", "3", 1, 0, "<p>Pergitor was a planet in the Minos Cluster settled by Jesa Corporation miners. Overmining resulted in volcanic eruptions that poisoned the atmosphere and destroyed the ecosystem. The inhabitants were forced to retreat to sealed cities, and breath masks are required outside. Just before the start of the Clone Wars, the Church of Infinite Perception launched a coup, installing a theocracy.</p><p>Being the southernmost point of the known Minos Cluster, of noteable interest is Waypoint, a resupply station and watering hole for frontiersmen and scouts before setting off into the Unknown Regions or Kathol Outback.</p>" );
    this.stars[8] = new star(/* -24.54, 182.12, -40.58, "Waypoint", "DA2", "0", "0", 0, 0 */);
    this.stars[9] = new star( 105.56, 48.72, -37.66, "Canaar", "Temperate", "Plains, Fields, Coral Mountains", "2", 1, 0,"<p>Canaar's green star casts a yellowish-green glow across the system. Many of the planets and moons are arboreal and photosynthesize better than comparable plants of other systems. Several planets have agriculture farms for shipping food out-system.</p>");
    this.stars[10] = new star(/* 105.56, 48.72, -37.66, "L 726-8 B", "M5.5", "0", "0", 0, 0 */);
    this.stars[11] = new star(/* 26.46, -121.24, -54.88, "Ross 154  ", "M4.5", "4", "4", 1, 0 */);
    this.stars[12] = new star(/* 103.32, -8.54, 100.8, "Ross 248  ", "M6", "1", "2", 1, 0 */);
    this.stars[13] = new star( 87.22, 115.92, -24.22, "Epsilon Eridani  ", "K2", "4", "5", 1, 0 );
    this.stars[14] = new star( 118.3, -28.84, -87.92, "Lacaille 9352  ", "M2", "2", "5", 1, 0 );
    this.stars[15] = new star(/* -152.18, 8.54, 2.1, "Ross 128  ", "M4.5", "3", "9", 1, 0 */);
    this.stars[16] = new star( 140.14, -52.36, -40.88, "L 789-6 A", "M5.5", "2", "4", 1, 0 );
    this.stars[17] = new star( 140.14, -52.36, -40.88, "L 789-6 B", "M5", "0", "0", 0, 0 );
    this.stars[18] = new star( 140.14, -52.36, -40.88, "L 789-6 C", "M7", "0", "0", 0, 0 );
    this.stars[19] = new star( -66.64, 144.48, 14.56, "Procyon A", "F5", "1", "7", 1, 0 );
    this.stars[20] = new star( -66.64, 144.48, 14.56, "Procyon B", "DA", "0", "0", 0, 0 );
    this.stars[21] = new star( 90.44, -85.68, 99.96, "Alkonost", "Barren Asteroid", "Agridomes", "5", 0, 0,"The high radiation output of the star requires special shield modifications to reach Alkonost, where some of the most interesting plantlife thrives in the known galaxy under special greenhouses.");
    this.stars[22] = new star(/* 90.44, -85.68, 99.96, "61 Cygni B", "K7", "0", "0", 0, 0 */);
    this.stars[23] = new star( 14.98, -80.78, 140.14, "Struve 2398 A", "M4", "3", "3", 1, 0 );
    this.stars[24] = new star( 14.98, -80.78, 140.14, "Struve 2398 B", "M5", "0", "0", 0, 0 );
    this.stars[25] = new star( 116.76, 9.24, 113.26, "Ellagro", "Terrestrial", "Savannah", "5", 0, 0, "<p>Information Unavaliable</p>");
    this.stars[26] = new star(/* 116.76, 9.24, 113.26, "Groombridge 34 B", "M6", "0", "0", 0, 0 */);
    this.stars[27] = new star( -89.6, 117.6, 74.62, "G51-15  ", "M6.5", "3", "8", 1, 0 );
    this.stars[28] = new star( 79.24, -44.24, -138.6, "Epsilon Indi A", "K4", "3", "1", 0, 0 );
    this.stars[29] = new star( 79.38, -43.96, -138.6, "Epsilon Indi B", "T1", "0", "0", 0, 0 );
    this.stars[30] = new star( 79.38, -43.96, -138.6, "Epsilon Indi C", "T6", "0", "0", 0, 0 );
    this.stars[31] = new star( 203.92, 0.28, -45.78, "Trantalor", "Type", "Terrain", "11", 1, 0, "<p>Text for Trantalor.</p>" );
    this.stars[32] = new star( 70.7, 97.44, -118.44, "L 372-58  ", "M5.5", "3", "1", 1, 0 );
    this.stars[33] = new star( 200.28, 150.26, -49.56, "L 725-32  ", "M5", "1", "4", 1, 0 );
    this.stars[34] = new star( -64.12, 160.44, 15.82, "Luyten's Star  ", "M3.5", "2", "5", 1, 0 );
    this.stars[35] = new star( 122.78, 115.5, 51.24, "SO 0253+1652  ", "M6.5", "3", "3", 1, 0 );
    this.stars[36] = new star( 26.74, 123.62, -126.56, "Kapteyn's Star  ", "M1", "2", "2", 1, 0 );
    this.stars[37] = new star( 15.4, -77.42, -161.56, "SCR 1845-6357 A", "M8.5", "3", "1", 0, 0 );
    this.stars[38] = new star( 15.4, -77.42, -161.56, "SCR 1845-6357 B", "T5.5", "0", "0", 0, 0 );
    this.stars[39] = new star( 106.26, -91.56, -113.12, "Lacaille 8760  ", "M0", "1", "4", 1, 0 );
    this.stars[40] = new star( 90.02, -38.22, 154.7, "MC-I504", "Inhospitable", "Ice Spire Ranges", "9", 0, 0, "<p>Trangfyrr, as it's known to the locals, is an inhospitable ice world. It is the 18th planet out from the system's star, and the world has a breathable standard atmosphere. Huge ice spire ranges stab through the surface, reaching kilometers high.</p><p>A small religious sect of Wookiees have a monastery on MC-I504, which they have named Trangfyrr. They believe Wookies descended from their home planet of Kashyyyk's icy poles rather than in the forest, and believe living in an icy wasteland like MC-I504 brings them closer to Wookie nirvana. Plus there are huge ice beasts against which to test their hunting skills.</p><p>Rich kids from Adarlon come here for weekends to race snowswoops and go ice fishing.</p>");
    this.stars[41] = new star(/* 90.02, -38.22, 154.7, "Kruger 60 B", "M6", "0", "0", 0, 0 */);
    this.stars[42] = new star( -134.4, 43.68, -118.3, "DENIS 1048-39  ", "M9", "1", "13", 1, 0 );
    this.stars[43] = new star( -23.8, 186.34, -9.24, "Ross 614 A", "M4.5", "0", "9", 0, 0 );
    this.stars[44] = new star( -23.8, 186.34, -9.24, "Ross 614 B", "M7", "0", "0", 0, 0 );
    this.stars[45] = new star( -72.66, -175.56, -42.7, "Wolf 1061  ", "M3.5", "1", "5", 1, 0 );
    this.stars[46] = new star( -192.22, -27.86, 30.8, "Wolf 424 A", "M5.5", "3", "9", 1, 0 );
    this.stars[47] = new star( -192.22, -27.86, 30.8, "Wolf 424 B", "M7", "0", "0", 0, 0 );
    this.stars[48] = new star( 158.2, 3.5, -120.82, "CD-37 15492  ", "M4", "1", "4", 1, 0 );
    this.stars[49] = new star( 195.72, 42.56, 18.9, "van Maanen's Star  ", "DZ7", "1", "4", 1, 0 );
    this.stars[50] = new star( 172.06, 99.4, 46.06, "L 1159-16  ", "M8", "1", "8", 1, 0 );
    this.stars[51] = new star( -93.1, 32.06, -179.06, "L 143-23  ", "M5.5", "2", "10", 1, 0 );
    this.stars[52] = new star( -192.64, 62.58, -40.6, "LP 731-58  ", "M6.5", "2", "14", 1, 0 );
    this.stars[53] = new star( -7.98, -75.88, 192.22, "BD+68 946  ", "M3.5", "2", "8", 1, 0 );
    this.stars[54] = new star( -19.6, -140.14, -151.34, "CD-46 11540  ", "M3", "1", "6", 0, 0 );
    this.stars[55] = new star( -89.6, 5.88, -190.96, "L 145-141  ", "DQ6", "2", "10", 1, 0 );
    this.stars[56] = new star( 182.66, -65.74, -28.14, "Rheltair", "Type", "Terrain", "12", 1, 0, "<p>Text for Rheltair.</p>" );
    this.stars[57] = new star( 199.36, -59.92, -52.92, "Ross 780  ", "M5", "2", "6", 1, 0 );
    this.stars[58] = new star( 72.94, -135.52, 150.78, "Jillsaaria", "Terrestrial", "Temperate Biomes", "7", 0, 0, "<p>Jillsaria is one of the systems in the Minos cluster which has indigenous intelligent life. Jillsarians are a species of muscular humanoid sentients with four arms, and can have orange skin or covered with brown fur.</p>");
    this.stars[59] = new star(/* 72.94, -135.52, 150.78, "G208-44 B", "M6", "0", "0", 0, 0 */);
    this.stars[60] = new star(/* 72.94, -135.52, 150.78, "G208-44 C", "M8", "0", "0", 0, 0 */);
    this.stars[61] = new star( -155.4, 37.94, 152.04, "Lalande 21258 A", "M2", "2", "9", 0, 0 );
    this.stars[62] = new star( -155.4, 37.94, 151.9, "Lalande 21258 B", "M6", "0", "0", 0, 0 );
    this.stars[63] = new star( -128.66, 66.22, 168.98, "Groombridge 1618  ", "K7", "2", "9", 1, 0 );
    this.stars[64] = new star( 110.32, 105.56, -163.8, "DENIS 0255-47  ", "L8", "1", "3", 1, 0 );
    this.stars[65] = new star( -190.54, 89.74, 76.16, "BD+20 2465  ", "M4.5", "2", "10", 1, 0 );
    this.stars[66] = new star( 118.44, -88.34, -170.1, "L 354-89  ", "M1", "1", "7", 0, 0 );
    this.stars[67] = new star( 106.54, 150.92, -131.46, "LP 944-20  ", "M9", "1", "4", 1, 0 );
    this.stars[68] = new star( -16.52, -163.94, -160.86, "CD-44 11909  ", "M3.5", "2", "6", 0, 0 );
    this.stars[69] = new star( 100.94, 204.68, -30.66, "Ahemait", "Ice World", "1", "10", 0, 0,"This colony world is governed by a Scientocracy, where the scientist of highest renown is elevated as Governor, for one standard cycle.");
    this.stars[70] = new star(/* 100.94, 204.68, -30.66, "Omicron² Eridani B", "DA4", "0", "0", 0, 0 */);
    this.stars[71] = new star(/* 100.94, 204.68, -30.66, "Omicron² Eridani C", "M4.5", "0", "0", 0, 0 */);
    this.stars[72] = new star( 156.38, -52.22, 161.14, "CalouGowan", "Gas Giant", "Refineries", "8", 0, 0, "<p>Information Unavaliable</p>");
    this.stars[73] = new star( 5.18, -231.98, 10.08, "Travnin", "Terrestrial", "Mountains, Desert", "8", 1, 0, "<p>Travnin was a moon which orbited a gas giant in the double-star Travnin system. It was the sector capital of the Minos Cluster, covered in deserts and mountains with intense winds. The local day was 26 standard hours; the year was 325 local days. The main settlement was Travnin Spaceport, which housed the spacer's bar, 'The Grand Design'.</p>");
    this.stars[74] = new star(/* 5.18, -231.98, 10.08, "70 Ophiuchi B", "K5", "0", "0", 0, 0 */);
    this.stars[75] = new star( 107.24, -405.66, 36.12, "Elrood", "", "1", "0", 1, 0 );
    this.stars[76] = new star( -207.5, 190.16, 90.78, "G9-38 A", "M5.5", "1", "7", 1, 0 );
    this.stars[77] = new star( -157.5, 160.16, 80.78, "G9-38 B", "M5.5", "0", "0", 0, 0 );
    this.stars[78] = new star( 232.12, 15.26, -67.34, "L 722-22 A", "M4", "1", "8", 1, 0 );
    this.stars[79] = new star( 232.12, 15.26, -67.34, "L 722-22 B", "M6", "0", "0", 0, 0 );
    this.stars[80] = new star( 0, 244.86, 11.48, "Brolsam", "Terrestrial", "Fields", "14", 0, 0, "<p>Brolsam was a planet within the system of the same name in the Kathol sector of the Outer Rim Territories. An agriworld, it was located on a branch off the Trition Trade Route, between the sector capital Kal'Shebbol and Torize. Although its distance from the sector's major trade route hampered its economic growth, Brolsam developed an industry based primarily around agriculture due to the presence of a significant community of Fefze swarms. The planet also gained a reputation as an artist's retreat.</p>");
    this.stars[81] = new star( -48.3, 2.66, 241.5, "MC-G302", "Uninhabitable", "Fungal Continents", "6", 0, 0,"<p>Known as Heldak, this world is awful. Most of the planet is completely uninhabitable — The planet's magnetosphere does not have enough pull to keep a consistent atmosphere clinging to the world's skin. There are gigantic slippery fungal growths that penetrate to the planet's mantle and leech material to keep themselves alive. These are huge, continent-spanning growths. They expel enough gasses to create a meager, barely breathable atmosphere in the center of these growths. Acid rains and spore volcano eruptions are common.</p><p>A small scientific outpost is stationed here, with biologists studying the fungal phenomena.</p>" );
    this.stars[82] = new star( -214.9, -106.12, 63.7, "Lalande 25372  ", "M4", "1", "10", 1, 0 );
    this.stars[83] = new star( 62.16, 240.1, -30.24, "KalShebbol", "Moist", "Open Plains", "4", 0, 0, "<p>Kal'Shebbol was the primary planet of the Kal'Shebbol system, in the Kathol sector of the Outer Rim Territories. Kal'Shebbol was located on the Trition Trade Route, the hyperlane that connected the major worlds of the sector to the nearby Minos Cluster. Settled around 392 BBY by escaped Twi'lek slaves from Ryloth, Kal'Shebbol grew from a small settlement into a major trading world only fifty years after its initial colonization as sizable Human and alien communities emigrated to the planet in search of a fresh start. Once the Kathol sector entered the Galactic Republic, Kal'Shebbol, being the closest planet to Republic space, was appointed as the sector capital.</p>");
    this.stars[84] = new star( 163.66, -175.28, -73.22, "LP 816-60  ", "M5", "1", "6", 0, 0 );
    this.stars[85] = new star( 49.14, 120.12, 215.74, "Stein 2051 A", "M4", "1", "8", 0, 0 );
    this.stars[86] = new star( 49.14, 120.12, 215.74, "Stein 2051 B", "DC5", "0", "0", 0, 0 );
    this.stars[87] = new star( -49.28, 204.68, 138.18, "Wolf 294  ", "M4", "1", "7", 0, 0 );
    this.stars[88] = new star( 33.04, -214.48, 140.84, "2MASS 1835+32  ", "M8.5", "1", "11", 0, 0 );
    this.stars[89] = new star( 32.62, 257.18, -16.66, "Kolatill", "M1.5", "1", "7", 0, 0 );
    this.stars[90] = new star( 114.24, 231.7, -43.54, "Dorcin", "T8.5", "1", "10", 0, 0, "<p>An inhabited world that places a high value on the art of Trading, and the immutability of a deal once struck.</p>");
    this.stars[91] = new star( 35.84, -84.28, 246.96, "Sigma Draconis  ", "K0", "1", "11", 1, 0 );
    this.stars[92] = new star( -10.78, 244.44, -98.14, "L 668-21 A", "M1", "1", "8", 1, 0 );
    this.stars[93] = new star( -10.78, 244.44, -98.14, "L 668-21 B", "T6", "0", "0", 0, 0 );
    this.stars[94] = new star( 20.16, 257.32, 57.12, "Torize", "M4", "1", "11", 0, 0 );
    this.stars[95] = new star( -8.68, -142.94, -223.3, "L 205-128  ", "M3.5", "0", "4", 0, 0 );
    this.stars[96] = new star( 87.08, -252.56, 24.22, "Wolf 1055 A", "M3.5", "0", "5", 0, 0 );
    this.stars[97] = new star( 88.06, -252.28, 24.08, "Wolf 1055 B", "M8", "0", "0", 0, 0 );
    this.stars[98] = new star( -136.22, 209.58, -98.7, "L 674-15  ", "M4", "1", "8", 0, 0 );
    this.stars[99] = new star( -179.76, -175.28, -98.42, "Lalande 27173 A", "K5", "1", "7", 0, 0 );
    this.stars[100] = new star( -179.76, -175.28, -98.42, "Lalande 27173 B", "M1", "0", "0", 0, 0 );
    this.stars[101] = new star( -179.76, -175.28, -98.42, "Lalande 27173 C", "M3", "0", "0", 0, 0 );
    this.stars[102] = new star( -179.9, -175.28, -98.28, "Lalande 27173 D", "T8", "0", "0", 0, 0 );
    this.stars[103] = new star( 64.82, -177.8, -192.92, "L 347-14  ", "M4.5", "1", "9", 0, 0 );
    this.stars[104] = new star( -118.72, 242.9, 16.8, "MC-408-Gleemus", "Rogue Planet", "?", "?", 0, 0,"<p>Information Unavaliable</p>");
    this.stars[105] = new star( -122.5, -162.54, -178.78, "CD-40 9712  ", "M3", "1", "10", 1, 0 );
    this.stars[106] = new star( 141.54, 30.8, 230.16, "Eta Cassiopeiae A", "G0", "0", "7", 0, 0 );
    this.stars[107] = new star( 141.54, 30.8, 230.16, "Eta Cassiopeiae B", "K7", "0", "0", 0, 0 );
    this.stars[108] = new star( 272.02, -13.02, 11.48, "Lalande 46650  ", "M2", "0", "9", 0, 0 );
    this.stars[109] = new star( -47.6, -239.68, -122.36, "36 Ophiuchi A", "K1", "1", "7", 0, 0 );
    this.stars[110] = new star( -77.6, -309.68, -122.36, "36 Ophiuchi B", "K1", "0", "0", 0, 0 );
    this.stars[111] = new star( -46.48, -339.4, -121.8, "36 Ophiuchi C", "K5", "0", "0", 0, 0 );
    this.stars[112] = new star( 120.82, -187.74, -162.82, "MC-757-Zaroff", "Rogue Planet", "?", "?", 0, 0,"<p>Information Unavaliable</p>");
    this.stars[113] = new star(/* 120.82, -187.74, -162.82, "CD-36 13940 B", "M3.5", "0", "0", 0, 0 */);
    this.stars[114] = new star( 130.48, 154.42, -189, "82 Eridani  ", "G5", "0", "6", 0, 0 );
    this.stars[115] = new star( 59.78, -95.48, -255.08, "Delta Pavonis  ", "G5", "0", "8", 0, 0 );
    this.stars[116] = new star( -213.36, -169.82, -60.48, "Wolf 1481  ", "M3", "0", "9", 0, 0 );
    
    this.wormholes[0] = { from: 0, to: 1, color: "100,100,254" };
    if (!this.stars[0].reachable) {
        this.wormholes[0].color = '0,255,255';
    }
    this.wormholes[1] = { from: 0, to: 4, color: "255,255,255" };
    if (!this.stars[0].reachable) {
        this.wormholes[1].color = '0,255,255';
    }
    this.wormholes[2] = { from: 0, to: 7, color: "255,255,255" };
    if (!this.stars[0].reachable) {
        this.wormholes[2].color = '0,255,255';
    }
    this.wormholes[3] = { from: 0, to: 9, color: "100,100,254" };
    if (!this.stars[0].reachable) {
        this.wormholes[3].color = '0,255,255';
        }
        if (this.stars[0].current || this.stars[9].current) {
            this.wormholes[3].color = '255,255,0';
        }
    
    this.wormholes[4] = { from: 0, to: 11, color: "100,100,254" };
    if (!this.stars[0].reachable) {
        this.wormholes[4].color = '0,255,255';
    }
    this.wormholes[5] = { from: 0, to: 12, color: "100,100,254" };
    if (!this.stars[0].reachable) {
        this.wormholes[5].color = '0,255,255';
    }
    this.wormholes[6] = { from: 0, to: 16, color: "100,100,254" };
    if (!this.stars[0].reachable) {
        this.wormholes[6].color = '0,255,255';
    }
    this.wormholes[7] = { from: 0, to: 19, color: "100,100,254" };
    if (!this.stars[0].reachable) {
        this.wormholes[7].color = '0,255,255';
    }
    this.wormholes[8] = { from: 1, to: 13, color: "100,100,254" };
    if (!this.stars[1].reachable) {
        this.wormholes[8].color = '0,255,255';
    }
    this.wormholes[9] = { from: 4, to: 23, color: "100,100,254" };
    if (!this.stars[4].reachable) {
        this.wormholes[9].color = '0,255,255';
    }
    this.wormholes[10] = { from: 4, to: 73, color: "255,255,255" };
    if (!this.stars[4].reachable) {
        this.wormholes[10].color = '0,255,255';
    }
    this.wormholes[11] = { from: 5, to: 6, color: "100,100,254" };
    if (!this.stars[5].reachable) {
        this.wormholes[11].color = '0,255,255';
    }
    this.wormholes[12] = { from: 5, to: 7, color: "100,100,254" };
    if (!this.stars[5].reachable) {
        this.wormholes[12].color = '0,255,255';
    }
    this.wormholes[13] = { from: 5, to: 27, color: "100,100,254" };
    if (!this.stars[5].reachable) {
        this.wormholes[13].color = '0,255,255';
    }
    this.wormholes[14] = { from: 5, to: 65, color: "100,100,254" };
    if (!this.stars[5].reachable) {
        this.wormholes[14].color = '0,255,255';
    }
    this.wormholes[15] = { from: 7, to: 34, color: "100,100,254" };
    if (!this.stars[7].reachable) {
        this.wormholes[15].color = '0,255,255';
    }
    this.wormholes[16] = { from: 7, to: 36, color: "100,100,254" };
    if (!this.stars[7].reachable) {
        this.wormholes[16].color = '0,255,255';
    }
    this.wormholes[17] = { from: 9, to: 13, color: "100,100,254" };
    if (!this.stars[9].reachable) {
        this.wormholes[17].color = '0,255,255';
    }
    this.wormholes[18] = { from: 9, to: 14, color: "100,100,254" };
    if (!this.stars[9].reachable) {
        this.wormholes[18].color = '0,255,255';
    }
    this.wormholes[19] = { from: 9, to: 31, color: "100,100,254" };
    if (!this.stars[9].reachable) {
        this.wormholes[19].color = '0,255,255';
    }
    this.wormholes[20] = { from: 9, to: 33, color: "100,100,254" };
    if (!this.stars[9].reachable) {
        this.wormholes[20].color = '0,255,255';
    }
    this.wormholes[21] = { from: 11, to: 1, color: "100,100,254" };
    if (!this.stars[11].reachable) {
        this.wormholes[21].color = '0,255,255';
    }
    this.wormholes[22] = { from: 11, to: 39, color: "100,100,254" };
    if (!this.stars[11].reachable) {
        this.wormholes[22].color = '0,255,255';
    }
    this.wormholes[23] = { from: 11, to: 45, color: "100,100,254" };
    if (!this.stars[11].reachable) {
        this.wormholes[23].color = '0,255,255';
    }
    this.wormholes[24] = { from: 13, to: 35, color: "100,100,254" };
    if (!this.stars[13].reachable) {
        this.wormholes[24].color = '0,255,255';
    }
    this.wormholes[25] = { from: 14, to: 48, color: "100,100,254" };
    if (!this.stars[14].reachable) {
        this.wormholes[25].color = '0,255,255';
    }
    this.wormholes[26] = { from: 15, to: 1, color: "100,100,254" };
    if (!this.stars[15].reachable) {
        this.wormholes[26].color = '0,255,255';
    }
    this.wormholes[27] = { from: 15, to: 42, color: "100,100,254" };
    if (!this.stars[15].reachable) {
        this.wormholes[27].color = '0,255,255';
    }
    this.wormholes[28] = { from: 15, to: 46, color: "100,100,254" };
    if (!this.stars[15].reachable) {
        this.wormholes[28].color = '0,255,255';
    }
    this.wormholes[29] = { from: 16, to: 57, color: "100,100,254" };
    if (!this.stars[16].reachable) {
        this.wormholes[29].color = '0,255,255';
    }
    this.wormholes[30] = { from: 21, to: 25, color: "100,100,254" };
    if (!this.stars[21].reachable) {
        this.wormholes[30].color = '0,255,255';
    }
    this.wormholes[31] = { from: 21, to: 58, color: "100,100,254" };
    if (!this.stars[21].reachable) {
        this.wormholes[31].color = '0,255,255';
    }
    this.wormholes[32] = { from: 23, to: 53, color: "100,100,254" };
    if (!this.stars[23].reachable) {
        this.wormholes[32].color = '0,255,255';
    }
    this.wormholes[33] = { from: 23, to: 91, color: "100,100,254" };
    if (!this.stars[23].reachable) {
        this.wormholes[33].color = '0,255,255';
    }
    this.wormholes[34] = { from: 25, to: 40, color: "100,100,254" };
    if (!this.stars[25].reachable) {
        this.wormholes[34].color = '0,255,255';
    }
    this.wormholes[35] = { from: 25, to: 72, color: "100,100,254" };
    if (!this.stars[25].reachable) {
        this.wormholes[35].color = '0,255,255';
    }
    this.wormholes[36] = { from: 27, to: 34, color: "100,100,254" };
    if (!this.stars[27].reachable) {
        this.wormholes[36].color = '0,255,255';
    }
    this.wormholes[37] = { from: 27, to: 65, color: "100,100,254" };
    if (!this.stars[27].reachable) {
        this.wormholes[37].color = '0,255,255';
    }
    this.wormholes[38] = { from: 28, to: 37, color: "100,100,254" };
    if (!this.stars[28].reachable) {
        this.wormholes[38].color = '0,255,255';
    }
    this.wormholes[39] = { from: 28, to: 54, color: "100,100,254" };
    if (!this.stars[28].reachable) {
        this.wormholes[39].color = '0,255,255';
    }
    this.wormholes[40] = { from: 28, to: 66, color: "100,100,254" };
    if (!this.stars[28].reachable) {
        this.wormholes[40].color = '0,255,255';
    }
    this.wormholes[41] = { from: 31, to: 13, color: "100,100,254" };
    if (!this.stars[31].reachable) {
        this.wormholes[41].color = '0,255,255';
    }
    this.wormholes[42] = { from: 31, to: 56, color: "100,100,254" };
    if (!this.stars[31].reachable) {
        this.wormholes[42].color = '0,255,255';
    }
    this.wormholes[43] = { from: 32, to: 36, color: "100,100,254" };
    if (!this.stars[32].reachable) {
        this.wormholes[43].color = '0,255,255';
    }
    this.wormholes[44] = { from: 32, to: 64, color: "100,100,254" };
    if (!this.stars[32].reachable) {
        this.wormholes[44].color = '0,255,255';
    }
    this.wormholes[45] = { from: 32, to: 67, color: "100,100,254" };
    if (!this.stars[32].reachable) {
        this.wormholes[45].color = '0,255,255';
    }
    this.wormholes[46] = { from: 35, to: 92, color: "100,100,254" };
    if (!this.stars[35].reachable) {
        this.wormholes[46].color = '0,255,255';
    }
    this.wormholes[47] = { from: 37, to: 68, color: "100,100,254" };
    if (!this.stars[37].reachable) {
        this.wormholes[47].color = '0,255,255';
    }
    this.wormholes[48] = { from: 37, to: 103, color: "100,100,254" };
    if (!this.stars[37].reachable) {
        this.wormholes[48].color = '0,255,255';
    }
    this.wormholes[49] = { from: 40, to: 81, color: "100,100,254" };
    if (!this.stars[40].reachable) {
        this.wormholes[49].color = '0,255,255';
    }
    this.wormholes[50] = { from: 46, to: 52, color: "100,100,254" };
    if (!this.stars[46].reachable) {
        this.wormholes[50].color = '0,255,255';
    }
    this.wormholes[51] = { from: 46, to: 82, color: "100,100,254" };
    if (!this.stars[46].reachable) {
        this.wormholes[51].color = '0,255,255';
    }
    this.wormholes[52] = { from: 49, to: 56, color: "100,100,254" };
    if (!this.stars[49].reachable) {
        this.wormholes[52].color = '0,255,255';
    }
    this.wormholes[53] = { from: 50, to: 35, color: "100,100,254" };
    if (!this.stars[50].reachable) {
        this.wormholes[53].color = '0,255,255';
    }
    this.wormholes[54] = { from: 51, to: 1, color: "100,100,254" };
    if (!this.stars[51].reachable) {
        this.wormholes[54].color = '0,255,255';
    }
    this.wormholes[55] = { from: 51, to: 55, color: "100,100,254" };
    if (!this.stars[51].reachable) {
        this.wormholes[55].color = '0,255,255';
    }
    this.wormholes[56] = { from: 52, to: 76, color: "100,100,254" };
    if (!this.stars[52].reachable) {
        this.wormholes[56].color = '0,255,255';
    }
    this.wormholes[57] = { from: 53, to: 63, color: "100,100,254" };
    if (!this.stars[53].reachable) {
        this.wormholes[57].color = '0,255,255';
    }
    this.wormholes[58] = { from: 55, to: 105, color: "100,100,254" };
    if (!this.stars[55].reachable) {
        this.wormholes[58].color = '0,255,255';
    }
    this.wormholes[59] = { from: 57, to: 78, color: "100,100,254" };
    if (!this.stars[57].reachable) {
        this.wormholes[59].color = '0,255,255';
    }
    this.wormholes[60] = { from: 61, to: 85, color: "100,100,254" };
    if (!this.stars[61].reachable) {
        this.wormholes[60].color = '0,255,255';
    }
    this.wormholes[61] = { from: 61, to: 87, color: "100,100,254" };
    if (!this.stars[61].reachable) {
        this.wormholes[61].color = '0,255,255';
    }
    this.wormholes[62] = { from: 63, to: 1, color: "100,100,254" };
    if (!this.stars[63].reachable) {
        this.wormholes[62].color = '0,255,255';
    }
    this.wormholes[63] = { from: 68, to: 109, color: "100,100,254" };
    if (!this.stars[68].reachable) {
        this.wormholes[63].color = '0,255,255';
    }
    this.wormholes[64] = { from: 69, to: 90, color: "100,100,254" };
    if (!this.stars[69].reachable) {
        this.wormholes[64].color = '0,255,255';
    }
    this.wormholes[65] = { from: 73, to: 75, color: "255,255,255" };
    if (!this.stars[73].reachable) {
        this.wormholes[65].color = '0,255,255';
    }
    this.wormholes[66] = { from: 80, to: 89, color: "100,100,254" };
    if (!this.stars[80].reachable) {
        this.wormholes[66].color = '0,255,255';
    }
    this.wormholes[67] = { from: 83, to: 94, color: "100,100,254" };
    if (!this.stars[83].reachable) {
        this.wormholes[67].color = '0,255,255';
    }
    this.wormholes[68] = { from: 84, to: 88, color: "100,100,254" };
    if (!this.stars[84].reachable) {
        this.wormholes[68].color = '0,255,255';
    }
    this.wormholes[69] = { from: 98, to: 99, color: "100,100,254" };
    if (!this.stars[98].reachable) {
        this.wormholes[69].color = '0,255,255';
    }
    this.draw();
};
