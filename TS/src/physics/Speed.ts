/**
 * На вход функции приходит диаметр колеса в дюймах и время в миллисекундах
 * между двумя соседними срабатываниями магнитного датчика, прикреплённого к
 * вилке велосипеда. Вернуть скорость велосипедиста в км/ч.
 * https://t.me/c/1533281926/26
 * @param raduis 
 * @param interval 
 * @returns 
 * @author VictorKarasev
 * @description Поскольку для нахождения результата мы будем использовать
 * физические КОНСТАНТЫ, то и финальный вид формулы упрощается:
 *
 * Pi = 3.141592653589793...
 *
 * r(cm) = r(inch) * 2.54(cm/inch)
 *
 * S(m) = Cr(cm) / 100(cm/m) =
 *        Pi * r(cm) * 2 / 100 =
 *        3.1415... * r(cm) * 0.02 = 
 *        r(cm) * 0.0628... = 
 *
 * t(sec) = t / 1000 = t * 0.001
 *
 * V(m/sec) = S(m) / t(sec)
 *
 * V(km/h) = V(m/sec) * 3.6 =
 *           S(m) / t(sec) * 3.6
 *
 * V(km/h) = (Pi * r(cm) * 0.02) / (t * 0.001) * 3.6 = 
 *           (Pi * r(cm) * 0.02) / t * 3600 = 
 *           (Pi * r(cm) * 72) / t = 
 *           (Pi * r(inch) * 2.54 * 72) / t = 
 *           (3.1415... * r(inch) * 182.88) / t =
 *           (r(inch) * 574.5344644885014) / t
 */
const BikeSpeedByWheel: (radius: number, interval: number) => number = (raduis, interval) => {
    if (raduis > 0 && interval > 0) {
        return raduis * 574.5344644885014 / interval;
    }

    return 0;
}

export {
    BikeSpeedByWheel
}
