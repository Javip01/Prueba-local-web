const platosJSON = [
    // --- MARISCOS ---
    { id: "m1", seccion: "Mariscos", nombre: "Gamba Blanca de Huelva", descripcion: "Producto de costa a la plancha.", alergenos: ["crustaceos"], ingredientes: ["gamba blanca", "sal"], categoria: "tapeo", precio: "23,00 €", imagen: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80" },
    { id: "m2", seccion: "Mariscos", nombre: "Gamba al Ajillo", descripcion: "Servidas burbujeantes.", alergenos: ["crustaceos"], ingredientes: ["gamba", "ajo", "guindilla", "aceite"], categoria: "tapeo", precio: "18,00 €", imagen: "https://images.unsplash.com/photo-1625938146369-adc83368bda7?auto=format&fit=crop&w=600&q=80" },
    { id: "m3", seccion: "Mariscos", nombre: "Gambón a la plancha", descripcion: "Jugosos y con un toque de sal gruesa.", alergenos: ["crustaceos"], ingredientes: ["gambón", "sal"], categoria: "tapeo", precio: "16,50 €", imagen: "https://images.unsplash.com/photo-1559742811-822873691fc8?auto=format&fit=crop&w=600&q=80" },
    { id: "m4", seccion: "Mariscos", nombre: "Coquinas a la sartén", descripcion: "Salteadas suavemente con aceite y ajo.", alergenos: ["moluscos"], ingredientes: ["coquina", "ajo", "aceite"], categoria: "tapeo", precio: "17,50 €", imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80" },
    { id: "m5", seccion: "Mariscos", nombre: "Zamburiñas a la plancha", descripcion: "8 piezas a la plancha con majado de perejil.", alergenos: ["moluscos"], ingredientes: ["zamburiña", "perejil", "ajo", "aceite"], categoria: "tapeo", precio: "20,00 €", imagen: "https://images.unsplash.com/photo-1554502540-10901e19d1e2?auto=format&fit=crop&w=600&q=80" },
    { id: "m6", seccion: "Mariscos", nombre: "Almejas a la marinera", descripcion: "Con salsa clásica marinera.", alergenos: ["moluscos", "gluten", "sulfitos"], ingredientes: ["almeja", "ajo", "vino blanco", "harina"], categoria: "tapeo", precio: "19,00 €", imagen: "https://images.unsplash.com/photo-1622345511397-c81b67f1dc65?auto=format&fit=crop&w=600&q=80" },

    // --- EMBUTIDOS ---
    { id: "e1", seccion: "Embutidos", nombre: "Jamón Ibérico de Bellota", descripcion: "Con Pan tostado y Tomate.", alergenos: ["gluten"], ingredientes: ["jamón ibérico", "pan", "tomate"], categoria: "tapeo", precio: "25,00 €", imagen: "https://images.unsplash.com/photo-1621317750868-e4b95345dd1a?auto=format&fit=crop&w=600&q=80" },
    { id: "e2", seccion: "Embutidos", nombre: "Queso de Oveja", descripcion: "Queso curado tradicional.", alergenos: ["lactosa"], ingredientes: ["queso de oveja"], categoria: "tapeo", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80" },
    { id: "e3", seccion: "Embutidos", nombre: "Mixta Jamón Ibérico y Queso", descripcion: "La combinación perfecta.", alergenos: ["lactosa", "gluten"], ingredientes: ["jamón ibérico", "queso de oveja"], categoria: "tapeo", precio: "24,00 €", imagen: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80" },
    { id: "e4", seccion: "Embutidos", nombre: "Cecina de León con Almendras fritas", descripcion: "Cecina de primera con toque crujiente.", alergenos: ["frutos secos"], ingredientes: ["cecina", "almendras", "aceite"], categoria: "tapeo", precio: "15,00 €", imagen: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80" },
    { id: "e5", seccion: "Embutidos", nombre: "Lomo Ibérico de Bellota", descripcion: "Corte premium de lomo ibérico.", alergenos: [], ingredientes: ["lomo ibérico"], categoria: "tapeo", precio: "22,00 €", imagen: "https://images.unsplash.com/photo-1589128362678-83161c94d1df?auto=format&fit=crop&w=600&q=80" },

    // --- PASTA ---
    { id: "pa1", seccion: "Pasta", nombre: "Spaghetti Boloñesa", descripcion: "Salsa de carne tradicional.", alergenos: ["gluten", "huevo"], ingredientes: ["pasta", "carne picada", "tomate", "cebolla"], categoria: "contundente", precio: "11,00 €", imagen: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80" },
    { id: "pa2", seccion: "Pasta", nombre: "Spaghetti Carbonara", descripcion: "Clásica receta suave.", alergenos: ["gluten", "huevo", "lactosa"], ingredientes: ["pasta", "bacon", "nata", "huevo", "queso"], categoria: "contundente", precio: "11,00 €", imagen: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80" },

    // --- VERDURAS Y ENSALADAS ---
    { id: "v1", seccion: "Verduras y Ensaladas", nombre: "Pimientos de Padrón", descripcion: "Unos pican y otros no.", alergenos: [], ingredientes: ["pimientos de padrón", "sal gruesa", "aceite"], categoria: "ligero", precio: "12,00 €", imagen: "https://images.unsplash.com/photo-1628108426038-f86a9f77fce9?auto=format&fit=crop&w=600&q=80" },
    { id: "v2", seccion: "Verduras y Ensaladas", nombre: "Trigueros plancha", descripcion: "Espárragos trigueros a la parrilla.", alergenos: [], ingredientes: ["espárragos", "sal", "aceite"], categoria: "ligero", precio: "13,50 €", imagen: "https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?auto=format&fit=crop&w=600&q=80" },
    { id: "v3", seccion: "Verduras y Ensaladas", nombre: "Ensaladilla Rusa", descripcion: "Nuestra ensaladilla casera.", alergenos: ["huevo", "pescado"], ingredientes: ["patata", "zanahoria", "atún", "mayonesa", "huevo"], categoria: "ligero", precio: "11,00 €", imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80" },
    { id: "v4", seccion: "Verduras y Ensaladas", nombre: "Ensalada Mixta", descripcion: "Fina y fresca para acompañar.", alergenos: ["huevo", "pescado"], ingredientes: ["lechuga", "tomate", "cebolla", "atún", "huevo"], categoria: "ligero", precio: "9,00 €", imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80" },
    { id: "v5", seccion: "Verduras y Ensaladas", nombre: "Ensalada de Pimientos Asados", descripcion: "Con Ventresca de Bonito.", alergenos: ["pescado"], ingredientes: ["pimiento rojo asado", "ventresca de bonito", "aceite de oliva"], categoria: "ligero", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1628108426038-f86a9f77fce9?auto=format&fit=crop&w=600&q=80" },
    { id: "v6", seccion: "Verduras y Ensaladas", nombre: "Ensalada César grande", descripcion: "Con crujientes picatostes y salsa especial.", alergenos: ["gluten", "lactosa", "huevo", "pescado"], ingredientes: ["lechuga", "pollo", "picatostes", "queso parmesano", "salsa césar"], categoria: "ligero", precio: "17,50 €", imagen: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80" },

    // --- NOVEDADES ---
    { id: "n1", seccion: "Novedades del Rincón de Sanabria", nombre: "Anchoas de Santoña", descripcion: "De gran calibre, puras.", alergenos: ["pescado"], ingredientes: ["anchoa", "aceite de oliva"], categoria: "tapeo", precio: "20,00 €", imagen: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=600&q=80" },
    { id: "n2", seccion: "Novedades del Rincón de Sanabria", nombre: "Ensalada de Tomate Rosa", descripcion: "Con Lomos de Ventresca de Bonito.", alergenos: ["pescado"], ingredientes: ["tomate rosa", "ventresca", "cebolla", "aceite de oliva"], categoria: "ligero", precio: "16,50 €", imagen: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=600&q=80" },
    { id: "n3", seccion: "Novedades del Rincón de Sanabria", nombre: "Ensalada de Canónigos", descripcion: "Con Salmón, Gulas y Aguacate.", alergenos: ["pescado", "crustaceos", "gluten"], ingredientes: ["canónigos", "salmón ahumado", "gulas", "aguacate"], categoria: "ligero", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" },
    { id: "n4", seccion: "Novedades del Rincón de Sanabria", nombre: "Setas empanadas", descripcion: "Con Ali-Oli y Mostaza Miel.", alergenos: ["gluten", "huevo", "mostaza"], ingredientes: ["setas", "pan rallado", "huevo", "alioli", "mostaza"], categoria: "tapeo", precio: "14,00 €", imagen: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=600&q=80" },
    { id: "n5", seccion: "Novedades del Rincón de Sanabria", nombre: "Setas a la plancha", descripcion: "Salteadas al natural.", alergenos: [], ingredientes: ["setas", "ajo", "perejil", "aceite"], categoria: "ligero", precio: "14,00 €", imagen: "https://images.unsplash.com/photo-1597341381387-9bb3a64761fc?auto=format&fit=crop&w=600&q=80" },
    { id: "n6", seccion: "Novedades del Rincón de Sanabria", nombre: "Croquetas de Chorizo y Gambas", descripcion: "Un mar y montaña sorprendente.", alergenos: ["gluten", "lactosa", "huevo", "crustaceos"], ingredientes: ["leche", "harina", "chorizo", "gamba", "pan rallado"], categoria: "tapeo", precio: "14,00 €", imagen: "https://images.unsplash.com/photo-1626200419188-f56e4c703b30?auto=format&fit=crop&w=600&q=80" },
    { id: "n7", seccion: "Novedades del Rincón de Sanabria", nombre: "Flor de alcachofa", descripcion: "Con crema de frambuesa, jamón y queso de cabra (4 unds).", alergenos: ["lactosa"], ingredientes: ["alcachofa", "mermelada frambuesa", "jamón ibérico", "queso de cabra"], categoria: "tapeo", precio: "18,00 €", imagen: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80" },

    // --- PESCADOS ---
    { id: "pe1", seccion: "Pescados", nombre: "Lubina Suprema a la bilbaína", descripcion: "Salseada con refrito tradicional.", alergenos: ["pescado"], ingredientes: ["lubina", "ajo", "guindilla", "aceite", "vinagre"], categoria: "contundente", precio: "19,50 €", imagen: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=600&q=80" },
    { id: "pe2", seccion: "Pescados", nombre: "Dorada Suprema a la bilbaína", descripcion: "Dorada abierta con refrito de ajos.", alergenos: ["pescado"], ingredientes: ["dorada", "ajo", "guindilla", "aceite", "vinagre"], categoria: "contundente", precio: "19,50 €", imagen: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=600&q=80" },
    { id: "pe3", seccion: "Pescados", nombre: "Emperador con ajo y perejil", descripcion: "Corte limpio a la plancha.", alergenos: ["pescado"], ingredientes: ["emperador", "ajo", "perejil"], categoria: "contundente", precio: "17,00 €", imagen: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=600&q=80" },
    { id: "pe4", seccion: "Pescados", nombre: "Lomos de Bacalao con tomate", descripcion: "Guiso clásico de bacalao.", alergenos: ["pescado", "gluten"], ingredientes: ["bacalao", "tomate", "cebolla", "pimiento"], categoria: "contundente", precio: "21,00 €", imagen: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=600&q=80" },

    // --- CARNES ---
    { id: "c1", seccion: "Carnes", nombre: "Churrasco de Ternera", descripcion: "1Kg troceado con Pimientos de Padrón.", alergenos: [], ingredientes: ["ternera", "pimientos de padrón"], categoria: "contundente", precio: "32,00 €", imagen: "https://images.unsplash.com/photo-1544025162-83141bdc0a76?auto=format&fit=crop&w=600&q=80" },
    { id: "c2", seccion: "Carnes", nombre: "Lomo Alto de Ternera", descripcion: "1Kg troceado con Pimientos de Padrón.", alergenos: [], ingredientes: ["ternera", "pimientos de padrón"], categoria: "contundente", precio: "34,00 €", imagen: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80" },
    { id: "c3", seccion: "Carnes", nombre: "Chuletillas de Cordero lechal", descripcion: "10 unidades hechas a la brasa.", alergenos: [], ingredientes: ["cordero lechal", "sal gruesa"], categoria: "contundente", precio: "23,00 €", imagen: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80" },
    { id: "c4", seccion: "Carnes", nombre: "Carne de Pincho adobado", descripcion: "Con Pimientos de Padrón.", alergenos: [], ingredientes: ["carne de cerdo", "adobo", "pimentón", "pimientos de padrón"], categoria: "contundente", precio: "15,00 €", imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" },

    // --- RACIONES ---
    { id: "r1", seccion: "Raciones", nombre: "Patatas Bravas", descripcion: "Nuestra salsa picante casera.", alergenos: [], ingredientes: ["patata", "salsa brava"], categoria: "tapeo", precio: "9,50 €", imagen: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?auto=format&fit=crop&w=600&q=80" },
    { id: "r2", seccion: "Raciones", nombre: "Patatas Dos Salsas", descripcion: "Mitad bravas, mitad alioli.", alergenos: ["huevo", "lactosa", "mostaza"], ingredientes: ["patata", "salsa brava", "alioli"], categoria: "tapeo", precio: "9,50 €", imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80" },
    { id: "r3", seccion: "Raciones", nombre: "Mollejas de Cordero", descripcion: "Salteadas en su punto.", alergenos: [], ingredientes: ["mollejas de cordero", "ajo", "perejil"], categoria: "tapeo", precio: "24,00 €", imagen: "https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?auto=format&fit=crop&w=600&q=80" },
    { id: "r4", seccion: "Raciones", nombre: "Panceta de Cerdo a la plancha", descripcion: "Con Pimientos de Padrón.", alergenos: [], ingredientes: ["panceta", "pimientos de padrón"], categoria: "tapeo", precio: "14,00 €", imagen: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=600&q=80" },
    { id: "r5", seccion: "Raciones", nombre: "Fingers de Pollo", descripcion: "Crujientes tiritas empanadas.", alergenos: ["gluten", "huevo", "lactosa"], ingredientes: ["pechuga de pollo", "pan rallado", "huevo"], categoria: "tapeo", precio: "14,00 €", imagen: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80" },
    { id: "r6", seccion: "Raciones", nombre: "Morcilla de Burgos", descripcion: "Morcilla artesana frita.", alergenos: ["gluten"], ingredientes: ["morcilla", "arroz", "cebolla"], categoria: "tapeo", precio: "13,50 €", imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" },
    { id: "r7", seccion: "Raciones", nombre: "Huevos rotos con Jamón", descripcion: "Clásico infalible.", alergenos: ["huevo"], ingredientes: ["huevo", "patata", "jamón ibérico"], categoria: "contundente", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80" },
    { id: "r8", seccion: "Raciones", nombre: "Huevos rotos con Chistorra", descripcion: "Con mucho sabor.", alergenos: ["huevo"], ingredientes: ["huevo", "patata", "chistorra"], categoria: "contundente", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80" },
    { id: "r9", seccion: "Raciones", nombre: "Huevos rotos con Morcilla", descripcion: "Toque ibérico tradicional.", alergenos: ["huevo", "gluten"], ingredientes: ["huevo", "patata", "morcilla"], categoria: "contundente", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80" },
    { id: "r10", seccion: "Raciones", nombre: "Pulpo a la Gallega", descripcion: "Sobre base de cachelos y pimentón.", alergenos: ["moluscos"], ingredientes: ["pulpo", "patata", "pimentón", "aceite de oliva", "sal gruesa"], categoria: "contundente", precio: "27,00 €", imagen: "https://images.unsplash.com/photo-1599321955726-e04842669811?auto=format&fit=crop&w=600&q=80" },
    { id: "r11", seccion: "Raciones", nombre: "Croquetas de Jamón", descripcion: "Cremosas por dentro, crujientes por fuera.", alergenos: ["gluten", "lactosa", "huevo"], ingredientes: ["leche", "harina", "jamón ibérico", "mantequilla", "pan rallado"], categoria: "tapeo", precio: "13,00 €", imagen: "https://images.unsplash.com/photo-1599487405269-8250005a9144?auto=format&fit=crop&w=600&q=80" },
    { id: "r12", seccion: "Raciones", nombre: "Callos Caseros", descripcion: "A fuego lento.", alergenos: ["sulfitos"], ingredientes: ["callos", "chorizo", "morcilla", "pimentón"], categoria: "contundente", precio: "15,00 €", imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" },
    { id: "r13", seccion: "Raciones", nombre: "Oreja adobada a la plancha", descripcion: "Crujiente y adobada.", alergenos: [], ingredientes: ["oreja de cerdo", "adobo", "ajo", "perejil"], categoria: "tapeo", precio: "15,50 €", imagen: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=600&q=80" },

    // --- DEL MAR ---
    { id: "dm1", seccion: "Del Mar", nombre: "Calamares a la romana", descripcion: "Anillas tiernas en rebozado casero.", alergenos: ["gluten", "moluscos", "huevo"], ingredientes: ["calamar", "harina", "huevo"], categoria: "tapeo", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1599487405269-8250005a9144?auto=format&fit=crop&w=600&q=80" },
    { id: "dm2", seccion: "Del Mar", nombre: "Chopitos fritos", descripcion: "Puntillas fritas crujientes.", alergenos: ["gluten", "moluscos"], ingredientes: ["chopitos", "harina", "limón"], categoria: "tapeo", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1599487405269-8250005a9144?auto=format&fit=crop&w=600&q=80" },
    { id: "dm3", seccion: "Del Mar", nombre: "Cazón adobado", descripcion: "Bienmesabe andaluz.", alergenos: ["gluten", "pescado"], ingredientes: ["cazón", "harina", "vinagre", "orégano", "comino"], categoria: "tapeo", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80" },
    { id: "dm4", seccion: "Del Mar", nombre: "Rabas empanadas", descripcion: "Tiras de potón empanadas.", alergenos: ["gluten", "moluscos", "huevo", "lactosa"], ingredientes: ["potón", "pan rallado", "huevo"], categoria: "tapeo", precio: "16,00 €", imagen: "https://images.unsplash.com/photo-1599487405269-8250005a9144?auto=format&fit=crop&w=600&q=80" },
    { id: "dm5", seccion: "Del Mar", nombre: "Fritura de Pescado", descripcion: "Variado del mar andaluz.", alergenos: ["gluten", "pescado", "moluscos", "crustaceos"], ingredientes: ["pescado variado", "calamar", "gamba", "harina"], categoria: "tapeo", precio: "23,00 €", imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80" },
    { id: "dm6", seccion: "Del Mar", nombre: "Boquerones fritos", descripcion: "Abiertos, limpios y fritos.", alergenos: ["gluten", "pescado"], ingredientes: ["boquerón", "harina"], categoria: "tapeo", precio: "15,00 €", imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80" },
    { id: "dm7", seccion: "Del Mar", nombre: "Sepia a la plancha con Ali-Oli", descripcion: "Limpia y tierna.", alergenos: ["moluscos", "huevo"], ingredientes: ["sepia", "ajo", "perejil", "alioli"], categoria: "tapeo", precio: "16,50 €", imagen: "https://images.unsplash.com/photo-1599487405269-8250005a9144?auto=format&fit=crop&w=600&q=80" },
    { id: "dm8", seccion: "Del Mar", nombre: "Bacalao rebozado", descripcion: "Tajadas fritas tradicionales.", alergenos: ["gluten", "pescado", "huevo"], ingredientes: ["bacalao", "harina", "huevo"], categoria: "tapeo", precio: "16,50 €", imagen: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=600&q=80" },

    // --- POSTRES CASEROS ---
    { id: "po1", seccion: "Postres Caseros", nombre: "Flan de Huevo", descripcion: "Flan casero clásico.", alergenos: ["huevo", "lactosa"], ingredientes: ["huevo", "leche", "azúcar", "caramelo"], categoria: "dulce", precio: "5,00 €", imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80" },
    { id: "po2", seccion: "Postres Caseros", nombre: "Pudin", descripcion: "Receta de aprovechamiento deliciosa.", alergenos: ["gluten", "huevo", "lactosa"], ingredientes: ["pan", "leche", "huevo", "azúcar"], categoria: "dulce", precio: "5,50 €", imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80" },
    { id: "po3", seccion: "Postres Caseros", nombre: "Natillas", descripcion: "Con su galleta tradicional.", alergenos: ["huevo", "lactosa", "gluten"], ingredientes: ["leche", "yema de huevo", "azúcar", "canela", "galleta"], categoria: "dulce", precio: "5,00 €", imagen: "https://images.unsplash.com/photo-1588675646184-601f6ee6a992?auto=format&fit=crop&w=600&q=80" },
    { id: "po4", seccion: "Postres Caseros", nombre: "Arroz con Leche", descripcion: "Muy meloso y con canela.", alergenos: ["lactosa"], ingredientes: ["arroz", "leche", "azúcar", "canela", "limón"], categoria: "dulce", precio: "5,00 €", imagen: "https://images.unsplash.com/photo-1588675646184-601f6ee6a992?auto=format&fit=crop&w=600&q=80" },
    { id: "po5", seccion: "Postres Caseros", nombre: "Tarta de Queso", descripcion: "Al horno.", alergenos: ["gluten", "lactosa", "huevo"], ingredientes: ["queso crema", "nata", "huevo", "galleta"], categoria: "dulce", precio: "6,00 €", imagen: "https://images.unsplash.com/photo-1605197136006-21820b2ebfa4?auto=format&fit=crop&w=600&q=80" },
    { id: "po6", seccion: "Postres Caseros", nombre: "Tarta de Maracuyá y Mango", descripcion: "Postre tropical refrescante.", alergenos: ["gluten", "lactosa", "huevo"], ingredientes: ["puré de maracuyá", "mango", "nata", "galleta", "huevo"], categoria: "dulce", precio: "6,00 €", imagen: "https://images.unsplash.com/photo-1571115177098-24edf7bb100b?auto=format&fit=crop&w=600&q=80" },
    { id: "po7", seccion: "Postres Caseros", nombre: "Brownie de chocolate blanco y pistacho", descripcion: "El dulce más goloso.", alergenos: ["gluten", "lactosa", "huevo", "frutos secos"], ingredientes: ["chocolate blanco", "pistacho", "mantequilla", "harina", "huevo"], categoria: "dulce", precio: "6,00 €", imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80" },
    { id: "po8", seccion: "Postres Caseros", nombre: "Tiramisú", descripcion: "Receta italiana con cacao puro.", alergenos: ["gluten", "lactosa", "huevo"], ingredientes: ["mascarpone", "café", "bizcocho", "cacao", "huevo"], categoria: "dulce", precio: "6,00 €", imagen: "https://images.unsplash.com/photo-1571115177098-24edf7bb100b?auto=format&fit=crop&w=600&q=80" },
    { id: "po9", seccion: "Postres Caseros", nombre: "Tarta de 3 Chocolates", descripcion: "Tres texturas de chocolate.", alergenos: ["lactosa", "soja", "frutos secos", "gluten"], ingredientes: ["chocolate blanco", "chocolate con leche", "chocolate negro", "nata", "galleta"], categoria: "dulce", precio: "6,00 €", imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },

    // --- TARTAS ---
    { id: "po10", seccion: "Tartas", nombre: "Tarta de Manzana", descripcion: "Sobre base hojaldrada o brisa.", alergenos: ["gluten", "lactosa", "huevo"], ingredientes: ["manzana", "harina", "mantequilla", "azúcar", "huevo"], categoria: "dulce", precio: "6,00 €", imagen: "https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&w=600&q=80" },
    { id: "po11", seccion: "Tartas", nombre: "Tarta de Chocolate", descripcion: "Para los muy chocolateros.", alergenos: ["gluten", "lactosa", "huevo", "frutos secos", "soja"], ingredientes: ["chocolate", "harina", "mantequilla", "huevo"], categoria: "dulce", precio: "6,00 €", imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
    { id: "po12", seccion: "Tartas", nombre: "Tarta de Santiago", descripcion: "Con la cruz de almendra clásica.", alergenos: ["huevo", "frutos secos"], ingredientes: ["almendra molida", "azúcar", "huevo", "ralladura de limón"], categoria: "dulce", precio: "6,00 €", imagen: "https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&w=600&q=80" },

    // --- HELADOS ---
    { id: "po13", seccion: "Helados de Corte", nombre: "Contesa", descripcion: "Helado de corte clásico de nata y chocolate.", alergenos: ["lactosa", "soja", "frutos secos", "gluten"], ingredientes: ["nata", "chocolate", "leche"], categoria: "dulce", precio: "5,50 €", imagen: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?auto=format&fit=crop&w=600&q=80" },
    { id: "po14", seccion: "Helados de Corte", nombre: "Tarta al Whisky", descripcion: "Helada y borracha.", alergenos: ["gluten", "lactosa", "huevo", "frutos secos", "soja"], ingredientes: ["helado", "whisky", "yema", "bizcocho"], categoria: "dulce", precio: "6,50 €", imagen: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?auto=format&fit=crop&w=600&q=80" },
    { id: "po15", seccion: "Helados de Corte", nombre: "Helados de Bola", descripcion: "Turrón, Vainilla o Chocolate.", alergenos: ["lactosa", "huevo", "frutos secos"], ingredientes: ["leche", "nata", "sabor a elegir"], categoria: "dulce", precio: "5,50 €", imagen: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?auto=format&fit=crop&w=600&q=80" }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carta-container');
    
    if (container) {
        const seccionesUnicas = [...new Set(platosJSON.map(p => p.seccion))];

        seccionesUnicas.forEach(seccion => {
            let sectionHTML = `
                <section aria-labelledby="titulo-${seccion.replace(/\s+/g, '-')}">
                <h2 id="titulo-${seccion.replace(/\s+/g, '-')}" class="category-title">${seccion}</h2>
                <div class="grid-menu-horizontal">
            `;

            const platosDeSeccion = platosJSON.filter(p => p.seccion === seccion);

            platosDeSeccion.forEach(plato => {
                let alergenosHtml = plato.alergenos.map(al => `<span>${al.toUpperCase()}</span>`).join('');
                
                sectionHTML += `
                    <article class="card-horizontal" onclick="abrirPlato('${plato.id}')" role="button" tabindex="0" aria-label="Ver detalles de ${plato.nombre}">
                        <img src="${plato.imagen}" class="card-img-left" alt="Fotografía de ${plato.nombre}" loading="lazy">
                        <div class="card-body-horizontal">
                            <div class="card-header-horizontal">
                                <h3 class="card-title-horizontal">${plato.nombre}</h3>
                                <span class="card-price">${plato.precio}</span>
                            </div>
                            <p class="card-desc-horizontal">${plato.descripcion}</p>
                            ${alergenosHtml ? `<div class="allergens-icons" aria-label="Alérgenos">${alergenosHtml}</div>` : ''}
                        </div>
                    </article>`;
            });

            sectionHTML += `</div></section>`; 
            container.innerHTML += sectionHTML; 
        });
    }
});

// LÓGICA DEL POP-UP (MODAL DEL PLATO AMPLIADO)
function abrirPlato(idPlato) {
    const plato = platosJSON.find(p => p.id === idPlato);
    if (!plato) return;

    document.getElementById('plato-img').src = plato.imagen;
    document.getElementById('plato-img').alt = "Foto ampliada de " + plato.nombre;
    document.getElementById('plato-titulo').innerText = plato.nombre;
    document.getElementById('plato-precio').innerText = plato.precio;
    document.getElementById('plato-desc').innerText = plato.descripcion;
    document.getElementById('plato-ingredientes').innerHTML = `<strong>Ingredientes Principales:</strong> ${plato.ingredientes.join(', ')}`;
    
    const divAlergenos = document.getElementById('plato-alergenos');
    divAlergenos.innerHTML = '';
    if (plato.alergenos.length > 0) {
        divAlergenos.innerHTML = `<strong>Alérgenos:</strong> ` + plato.alergenos.map(al => `<span>${al.toUpperCase()}</span>`).join('');
    }

    document.getElementById('modal-plato').classList.add('active');
}

function cerrarPlato() {
    document.getElementById('modal-plato').classList.remove('active');
}

window.onclick = function(event) {
    const modalPlato = document.getElementById('modal-plato');
    const modalIA = document.getElementById('ia-modal');
    if (event.target === modalPlato) cerrarPlato();
    if (event.target === modalIA) closeWizard();
}

// LÓGICA WIZARD IA REVISADA
let wState = { allergies: [], dislikes: [], craving: '' };

function openWizard() { document.getElementById('ia-modal').classList.add('active'); nextStep(1); }
function closeWizard() { document.getElementById('ia-modal').classList.remove('active'); }
function nextStep(step) {
    document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
}

const tInput = document.getElementById('tags-input');
const tContainer = document.getElementById('tags-container');
if(tInput) {
    tInput.addEventListener('keyup', (e) => {
        if(e.key === 'Enter' || e.key === ',') {
            let val = tInput.value.replace(',','').trim().toLowerCase();
            if(val && !wState.dislikes.includes(val)) {
                wState.dislikes.push(val);
                renderTags();
            }
            tInput.value = '';
        }
    });
}

function renderTags() {
    tContainer.innerHTML = '';
    wState.dislikes.forEach(tag => {
        tContainer.innerHTML += `<span class="tag">${tag} <span style="cursor:pointer;font-weight:bold" onclick="removeTag('${tag}')">×</span></span>`;
    });
}
function removeTag(tag) { wState.dislikes = wState.dislikes.filter(t => t !== tag); renderTags(); }

document.querySelectorAll('.btn-allergy').forEach(btn => {
    btn.addEventListener('click', function() { this.classList.toggle('selected'); });
});

function procesarFiltros(craving) {
    wState.craving = craving;
    wState.allergies = Array.from(document.querySelectorAll('.btn-allergy.selected')).map(b => b.dataset.val);
    
    document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
    document.getElementById('step-loading').classList.add('active');

    setTimeout(() => {
        let seguros = platosJSON.filter(p => !p.alergenos.some(a => wState.allergies.includes(a)));
        let sinOdiados = seguros.filter(p => !p.ingredientes.some(i => wState.dislikes.some(d => i.includes(d))));
        let valiosos = sinOdiados.length > 0 ? sinOdiados : seguros; 
        let finales = valiosos.filter(p => p.categoria === craving);
        if(finales.length === 0) finales = valiosos; 

        mostrarResultados(finales.sort(() => 0.5 - Math.random()).slice(0, 3));
    }, 1500);
}

function mostrarResultados(platos) {
    document.getElementById('step-loading').classList.remove('active');
    const resDiv = document.getElementById('step-results');
    resDiv.classList.add('active');
    
    let html = `<h3 style="color: var(--accent-terracotta);">¡Aquí tienes tus opciones! ✨</h3>`;
    if(platos.length === 0) {
        html += `<p style="color: var(--text-main);">No he encontrado platos que cumplan con la seguridad alimentaria. ¡Pregunta al personal!</p>`;
    } else {
        html += `<p style="font-size:0.95rem; color:var(--text-muted); margin-bottom:15px;">Basado en tus preferencias libres de alérgenos:</p>`;
        platos.forEach(p => {
            html += `<article style="display:flex; gap:15px; margin-bottom:15px; border-bottom:1px solid var(--surface-light); padding-bottom:10px; cursor:pointer;" onclick="closeWizard(); abrirPlato('${p.id}')">
                <img src="${p.imagen}" style="width:70px; height:70px; border-radius:8px; object-fit:cover;" alt="${p.nombre}">
                <div>
                    <h4 style="margin:0; color:var(--accent-terracotta); font-size:1.1rem;">${p.nombre}</h4>
                    <p style="margin:0; font-size:1rem; color:var(--text-main); font-weight:700;">${p.precio}</p>
                </div>
            </article>`;
        });
    }
    html += `<button class="btn-primary" onclick="closeWizard()">Cerrar Inteligencia Artificial</button>`;
    resDiv.innerHTML = html;
}