// condicionales
function test() {
    let score = 80;
    if (score > 70) {
        console.log("ganaste");
    } else {
        console.log("Perdiste");
    }

}
test();

enum Days {
    lunes,
    martes, miercoles, jueves, viernes
}
enum DaysString {
    lunes = 'l',
    martes = 'm',
    miercoles = 'mm'
}
function testSwitch(activeday: Days, dayString: DaysString) {
    switch (activeday) {
        case 0:
            console.log(`Hoy es lunes`);
            // mostrar opciones de comida rápida
            break;
        case 1:
            console.log(`Hoy es martes`);
            // mostrar las rutas de tren
            break;
        case 2:
            console.log(`Hoy es miercoles`);
            // promos de oxxo
            break;
        case 3:
            console.log(`Hoy es jueves`);
            // mostrar descuento en pizzeria favorita
            break;
        case 4:
            console.log(`Hoy es viernes`);
            // solicitar uber despues de salir de trabajar.
            break;
        default:
            console.log("Es fin de semana, NO MOLESTAR");
        // apagar alarmas
    }
    switch (dayString) {
        case DaysString.lunes:
            console.log(`Hoy es lunes`);
            // mostrar opciones de comida rápida
            break;
        case DaysString.martes:
            console.log(`Hoy es martes`);
            // mostrar las rutas de tren
            break;
        default:
            console.log("Es fin de semana, NO MOLESTAR");
        // apagar alarmas
    }
}

testSwitch(Days.lunes, DaysString.martes);

