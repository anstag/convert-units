let units = {};

units.data = {
    //Length
    'mm' : [
        'millimeter',
        'миллиметра',
        'мм',
        'миллиметры',
        'миллиметрам',
        'миллиметров',
        'миллиметр',
        'миллиметрами',
        'mm'
    ],

    'cm' : [
        'centimeter',
        'сантиметрами',
        'сантиметрам',
        'сантиметра',
        'сантиметр',
        'см',
        'сантиметров',
        'сантиметры',
        'cm'
    ],

    'm' : [
        'meter',
        'метрами',
        'метры',
        'метров',
        'м',
        'метра',
        'метр',
        'метрам',
        'm'
    ],

    'in' : [
        'in'
    ],

    'ft-us' : [
        'ft-us'
    ],

    'ft' : [
        'ft'
    ],

    'mi' : [
        'mi'
    ],

    //Area
    'mm2' : [
        'mm2'
    ],

    'cm2' : [
        'cm2'
    ],

    'm2' : [
        'm2'
    ],

    'ha' : [
        'ha'
    ],

    'km2' : [
        'km2'
    ],

    'in2' : [
        'in2'
    ],

    'ft2' : [
        'ft2'
    ],

    'ac' : [
        'ac'
    ],

    'mi2' : [
        'mi2'
    ],

    //Mass
    'mcg' : [
        'microgram',
        'микрограммов',
        'микрограмма',
        'мкг',
        'микрограммам',
        'микрограммы',
        'микрограмм',
        'микрограммами',
        'mcg'
    ],

    'mg' : [
        'milligram',
        'миллиграмма',
        'миллиграммам',
        'миллиграммами',
        'миллиграмм',
        'миллиграммов',
        'миллиграммы',
        'мг',
        'mg'
    ],

    'g' : [
        'gram',
        'г',
        'граммов',
        'граммам',
        'граммы',
        'гр',
        'граммами',
        'грамм',
        'грамма',
        'g'
    ],

    'kg' : [
        'kilogram',
        'килограммов',
        'килограммами',
        'кг',
        'килограмма',
        'килограмм',
        'килограммы',
        'килограммам',
        'kg'
    ],

    'oz': [
        'oz'
    ],

    'lb': [
        'lb'
    ],

    'mt': [
        'mt'
    ],

    't': [
        't'
    ],

    //Volume
    'mm3': [
        'mm3'
    ],

    'cm3': [
        'cm3'
    ],

    'ml': [
        'ml'
    ],

    'l': [
        'l'
    ],

    'kl': [
        'kl'
    ],

    'm3': [
        'm3'
    ],

    'km3': [
        'km3'
    ],

    'tsp': [
        'tsp'
    ],

    'Tbs': [
        'Tbs'
    ],

    'in3': [
        'in3'
    ],

    'fl-oz': [
        'fl-oz'
    ],

    'cup': [
        'cup'
    ],

    'pnt': [
        'pnt'
    ],

    'qt': [
        'qt'
    ],

    'gal': [
        'gal'
    ],

    'ft3': [
        'ft3'
    ],

    'yd3': [
        'yd3'
    ],

    //Volume Flow Rate
    'mm3/s': [
        'mm3/s'
    ],

    'cm3/s': [
        'cm3/s'
    ],

    'ml/s': [
        'ml/s'
    ],

    'cl/s': [
        'cl/s'
    ],

    'dl/s': [
        'dl/s'
    ],

    'l/s': [
        'l/s'
    ],

    'l/min': [
        'l/min'
    ],

    'l/h': [
        'l/h'
    ],

    'kl/s': [
        'kl/s'
    ],

    'kl/min': [
        'kl/min'
    ],

    'kl/h': [
        'kl/h'
    ],

    'm3/s': [
        'm3/s'
    ],

    'm3/min': [
        'm3/min'
    ],

    'm3/h': [
        'm3/h'
    ],

    'km3/s': [
        'km3/s'
    ],

    'tsp/s': [
        'tsp/s'
    ],

    'Tbs/s': [
        'Tbs/s'
    ],

    'in3/s': [
        'in3/s'
    ],

    'in3/min': [
        'in3/min'
    ],

    'in3/h': [
        'in3/h'
    ],

    'fl-oz/s': [
        'fl-oz/s'
    ],

    'fl-oz/min': [
        'fl-oz/min'
    ],

    'fl-oz/h': [
        'fl-oz/h'
    ],

    'cup/s': [
        'cup/s'
    ],

    'pnt/s': [
        'pnt/s'
    ],

    'pnt/min': [
        'pnt/min'
    ],

    'pnt/h': [
        'pnt/h'
    ],

    'qt/s': [
        'qt/s'
    ],

    'gal/s': [
        'gal/s'
    ],

    'gal/min': [
        'gal/min'
    ],

    'gal/h': [
        'gal/h'
    ],

    'ft3/s': [
        'ft3/s'
    ],

    'ft3/min': [
        'ft3/min'
    ],

    'ft3/h': [
        'ft3/h'
    ],

    'yd3/s': [
        'yd3/s'
    ],

    'yd3/min': [
        'yd3/min'
    ],

    'yd3/h\'': [
        'yd3/h\''

    ],

    //Temperature
    'C' : [
        'degree_celsius',
        '°C',
        'цельсий',
        'градусами Цельсия',
        'градус Цельсия',
        'градусы цельсия',
        'градусов цельсия',
        'C'
    ],

    'F' : [
        'degree_fahrenheit',
        'фаренгейты',
        'F',
        'градус Фаренгейта',
        '°F',
        'фаренгейт',
        'F'
    ],

    'K' : [
        'kelvin',
        'кельвины',
        'кельвинами',
        'кельвинам',
        'кельвина',
        'кельвинов',
        'К',
        'кельвин',
        'K'
    ],

    'R': [
        'R'
    ],

    //Time
    'ns': [
        'ns'
    ],

    'mu': [
        'mu'
    ],

    'ms' : [
        'millisecond',
        'миллисекунды',
        'миллисекунд',
        'миллисекундам',
        'миллисекундами',
        'миллисекунда',
        'мс',
        'ms'
    ],

    's' : [
        'second',
        'секундами',
        'с',
        'секунд',
        'секунда',
        'секунды',
        'секундам',
        's'
    ],

    'min' : [
        'minute',
        'мин',
        'минуты',
        'минутами',
        'минута',
        'минутам',
        'минут',
        'min'
    ],

    'h' : [
        'hour',
        'часы',
        'часам',
        'ч',
        'часами',
        'час',
        'часов',
        'часа',
        'h'
    ],

    'd' : [
        'day',
        'дней',
        'днями',
        'дня',
        'д',
        'дням',
        'дни',
        'день',
        'd'
    ],

    'week' : [
        'week',
        'нед',
        'неделям',
        'недели',
        'неделями',
        'неделя',
        'недель',
        'week'
    ],

    'month': [
        'month'
    ],

    'year': [
        'year'
    ],

    //Frequency
    'Hz': [
        'Hz'
    ],

    'mHz': [
        'mHz'
    ],

    'kHz': [
        'kHz'
    ],

    'MHz': [
        'MHz'
    ],

    'GHz': [
        'GHz'
    ],

    'THz': [
        'THz'
    ],

    'rpm': [
        'rpm'
    ],

    'deg/s': [
        'deg/s'
    ],

    'rad/s': [
        'rad/s'

    ],

    //Speed
    'm/s': [
        'm/s'
    ],

    'km/h': [
        'km/h'
    ],

    'm/h': [
        'm/h'
    ],

    'knot': [
        'knot'
    ],

    'ft/s': [
        'ft/s'

    ],

    // Pace
    's/m': [
        's/m'
    ],

    'min/km': [
        'min/km'
    ],

    's/ft': [
        's/ft'
    ],

    //Pressure
    'Pa': [
        'Pa'
    ],

    'hPa': [
        'hPa'
    ],

    'kPa': [
        'kPa'
    ],

    'MPa': [
        'MPa'
    ],

    'bar': [
        'bar'
    ],

    'torr': [
        'torr'
    ],

    'psi': [
        'psi'
    ],

    'ksi': [
        'ksi'
    ],

    //Digital
    'b': [
        'b'
    ],

    'Kb': [
        'Kb'
    ],

    'Mb': [
        'Mb'
    ],

    'Gb': [
        'Gb'
    ],

    'Tb': [
        'Tb'
    ],

    'B': [
        'B'
    ],

    'KB': [
        'KB'
    ],

    'MB': [
        'MB'
    ],

    'GB': [
        'GB'
    ],

    'TB': [
        'TB'
    ],

    //Illuminance
    'lx': [
        'lx'
    ],

    'ft-cd': [
        'ft-cd'
    ],

    //Parts-Per
    'ppm': [
        'ppm'
    ],

    'ppb': [
        'ppb'
    ],

    'ppt': [
        'ppt'
    ],

    'ppq': [
        'ppq'
    ],

    //Voltage
    'V' : [
        'volt',
        'вольты',
        'вольта',
        'В',
        'в',
        'вольт',
        'V'
    ],

    'kV' : [
        'kilovolt',
        'кВ',
        'киловольт',
        'kV'
    ],

    'mV' : [
        'millivolt',
        'мВ',
        'милливольт',
        'mV'
    ],

    //Current
    'A' : [
        'ampere',
        'ампер',
        'амперами',
        'амперов',
        'амперы',
        'амперам',
        'А',
        'ампера',
        'A'
    ],

    'mA' : [
        'milliampere',
        'миллиамперам',
        'мА',
        'миллиамперы',
        'ма',
        'миллиамперов',
        'миллиамперами',
        'миллиампера',
        'миллиампер',
        'mA'
    ],

    'kA': [
        'kA'
    ],

    //Power
    'W': [
        'W'
    ],

    'mW': [
        'mW'
    ],

    'kW': [
        'kW'
    ],

    'MW': [
        'MW'
    ],

    'GW': [
        'GW'
    ],

    //Apparent Power
    'VA': [
        'VA'
    ],

    'mVA': [
        'mVA'
    ],

    'kVA': [
        'kVA'
    ],

    'MVA': [
        'MVA'
    ],

    'GVA': [
        'GVA'
    ],

    //Reactive Power
    'VAR': [
        'VAR'
    ],

    'mVAR': [
        'mVAR'
    ],

    'kVAR': [
        'kVAR'
    ],

    'MVAR': [
        'MVAR'
    ],

    'GVAR': [
        'GVAR'
    ],

    //Energy
    'Wh': [
        'Wh'
    ],

    'mWh': [
        'mWh'
    ],

    'kWh': [
        'kWh'
    ],

    'MWh': [
        'MWh'
    ],

    'GWh': [
        'GWh'
    ],

    'J': [
        'J'
    ],

    'kJ': [
        'kJ'
    ],

    //Reactive Energy
    'VARh': [
        'VARh'
    ],

    'mVARh': [
        'mVARh'
    ],

    'kVARh': [
        'kVARh'
    ],

    'MVARh': [
        'MVARh'
    ],

    'GVARh': [
        'GVARh'
    ],

    //Angle
    'deg': [
        'deg'
    ],

    'rad': [
        'rad'
    ],

    'grad': [
        'grad'
    ],

    'arcmin': [
        'arcmin'
    ],

    'arcsec': [
        'arcsec'
    ]
};

units.searchKey = function (value) {
    for (let key in units.data) {
        let search = units.data[key].indexOf(value);
        if ( search !== -1)
            return key;
    }
};

module.exports = units;