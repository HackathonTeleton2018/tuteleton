'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('metadata', [{
        "crit": "CRIT Estado de México",
        "recursos_necesarios": 81307742.31,
        "ingresos_comprometidos": 71032193.82,
        "porcentaje_cumplimiento": 0.98,
        "ingresos_esperados": 69611549.94,
        "minimo_necesario": 11696192.37,
        "capacidad_maxima": 2289,
        "costo_anual_promedio": 35521.08,
        "capacidad_actual": 329
      },
      {
        "crit": "CRIT Occidente",
        "recursos_necesarios": 68683578.43,
        "ingresos_comprometidos": 46500000,
        "porcentaje_cumplimiento": 0.7,
        "ingresos_esperados": 32550000,
        "minimo_necesario": 36133578.43,
        "capacidad_maxima": 2180,
        "costo_anual_promedio": 31506.23,
        "capacidad_actual": 1147
      },
      {
        "crit": "CRIT Oaxaca",
        "recursos_necesarios": 37779435.92,
        "ingresos_comprometidos": 32000000,
        "porcentaje_cumplimiento": 0.8,
        "ingresos_esperados": 25600000,
        "minimo_necesario": 12179435.92,
        "capacidad_maxima": 981,
        "costo_anual_promedio": 38511.15,
        "capacidad_actual": 316
      },
      {
        "crit": "CRIT Aguascalientes",
        "recursos_necesarios": 38460800.8,
        "ingresos_comprometidos": 38651000,
        "porcentaje_cumplimiento": 0.8,
        "ingresos_esperados": 30920800,
        "minimo_necesario": 7540000.8,
        "capacidad_maxima": 981,
        "costo_anual_promedio": 39205.71,
        "capacidad_actual": 192
      },
      {
        "crit": "CRIT Guanajuato",
        "recursos_necesarios": 26342045.16,
        "ingresos_comprometidos": 21400000,
        "porcentaje_cumplimiento": 0.8,
        "ingresos_esperados": 17120000,
        "minimo_necesario": 9222045.16,
        "capacidad_maxima": 654,
        "costo_anual_promedio": 40278.36,
        "capacidad_actual": 229
      },
      {
        "crit": "CRIT Coahuila",
        "recursos_necesarios": 39974493.53,
        "ingresos_comprometidos": 33000000,
        "porcentaje_cumplimiento": 0.8,
        "ingresos_esperados": 26400000,
        "minimo_necesario": 13574493.53,
        "capacidad_maxima": 981,
        "costo_anual_promedio": 40748.72,
        "capacidad_actual": 333
      },
      {
        "crit": "CRIT Hidalgo",
        "recursos_necesarios": 44320493.34,
        "ingresos_comprometidos": 41553134,
        "porcentaje_cumplimiento": 0.8,
        "ingresos_esperados": 33242507.2,
        "minimo_necesario": 11077986.14,
        "capacidad_maxima": 981,
        "costo_anual_promedio": 45178.89,
        "capacidad_actual": 245
      },
      {
        "crit": "CRIT Chihuahua",
        "recursos_necesarios": 39654017.21,
        "ingresos_comprometidos": 36994960,
        "porcentaje_cumplimiento": 0.8,
        "ingresos_esperados": 29595968,
        "minimo_necesario": 10058049.21,
        "capacidad_maxima": 981,
        "costo_anual_promedio": 40422.04,
        "capacidad_actual": 249
      },
      {
        "crit": "CRIT Chiapas",
        "recursos_necesarios": 42900151.82,
        "ingresos_comprometidos": 39936000,
        "porcentaje_cumplimiento": 0.85,
        "ingresos_esperados": 33945600,
        "minimo_necesario": 8954551.82,
        "capacidad_maxima": 981,
        "costo_anual_promedio": 43731.04,
        "capacidad_actual": 205
      },
      {
        "crit": "CRIT Nezahualcóyotl",
        "recursos_necesarios": 50861699.15,
        "ingresos_comprometidos": 42562606.3,
        "porcentaje_cumplimiento": 0.85,
        "ingresos_esperados": 36178215.36,
        "minimo_necesario": 14683483.8,
        "capacidad_maxima": 1199,
        "costo_anual_promedio": 42420.1,
        "capacidad_actual": 346
      },
      {
        "crit": "CRIT Quintana Roo",
        "recursos_necesarios": 49650569.55,
        "ingresos_comprometidos": 47489296,
        "porcentaje_cumplimiento": 0.85,
        "ingresos_esperados": 40365901.6,
        "minimo_necesario": 9284667.95,
        "capacidad_maxima": 1090,
        "costo_anual_promedio": 45550.98,
        "capacidad_actual": 204
      },
      {
        "crit": "CRIT Yucatán",
        "recursos_necesarios": 49650569.55,
        "ingresos_comprometidos": 47489296,
        "porcentaje_cumplimiento": 0.3,
        "ingresos_esperados": 14246788.8,
        "minimo_necesario": 35403780.75,
        "capacidad_maxima": 1090,
        "costo_anual_promedio": 45550.98,
        "capacidad_actual": 777
      },
      {
        "crit": "CRIT Tamaulipas",
        "recursos_necesarios": 39448222.17,
        "ingresos_comprometidos": 36984000,
        "porcentaje_cumplimiento": 0.85,
        "ingresos_esperados": 31436400,
        "minimo_necesario": 8011822.17,
        "capacidad_maxima": 1036,
        "costo_anual_promedio": 38095.82,
        "capacidad_actual": 210
      },
      {
        "crit": "CRIT Veracruz",
        "recursos_necesarios": 37126957.47,
        "ingresos_comprometidos": 48903164,
        "porcentaje_cumplimiento": 0.25,
        "ingresos_esperados": 12225791,
        "minimo_necesario": 24901166.47,
        "capacidad_maxima": 981,
        "costo_anual_promedio": 37846.03,
        "capacidad_actual": 658
      },
      {
        "crit": "CRIT Durango",
        "recursos_necesarios": 38374355.66,
        "ingresos_comprometidos": 36110180,
        "porcentaje_cumplimiento": 0.85,
        "ingresos_esperados": 30693653,
        "minimo_necesario": 7680702.66,
        "capacidad_maxima": 981,
        "costo_anual_promedio": 39117.59,
        "capacidad_actual": 196
      },
      {
        "crit": "CRIT  Sonora",
        "recursos_necesarios": 41865595.63,
        "ingresos_comprometidos": 45511110,
        "porcentaje_cumplimiento": 0.6,
        "ingresos_esperados": 27306666,
        "minimo_necesario": 14558929.63,
        "capacidad_maxima": 981,
        "costo_anual_promedio": 42676.45,
        "capacidad_actual": 341
      },
      {
        "crit": "CRIT Baja California Sur",
        "recursos_necesarios": 44458618.79,
        "ingresos_comprometidos": 44521215,
        "porcentaje_cumplimiento": 0.85,
        "ingresos_esperados": 37843032.75,
        "minimo_necesario": 6615586.04,
        "capacidad_maxima": 1090,
        "costo_anual_promedio": 40787.72,
        "capacidad_actual": 162
      },
      {
        "crit": "CRIT Puebla",
        "recursos_necesarios": 49650569.55,
        "ingresos_comprometidos": 50599327,
        "porcentaje_cumplimiento": 0.9,
        "ingresos_esperados": 45539394.3,
        "minimo_necesario": 4111175.25,
        "capacidad_maxima": 1100,
        "costo_anual_promedio": 45136.88,
        "capacidad_actual": 91
      },
      {
        "crit": "CRIT Ciudad de México",
        "recursos_necesarios": 48636953.33,
        "ingresos_comprometidos": 47000000,
        "porcentaje_cumplimiento": 0.85,
        "ingresos_esperados": 39950000,
        "minimo_necesario": 8686953.33,
        "capacidad_maxima": 1090,
        "costo_anual_promedio": 44621.06,
        "capacidad_actual": 195
      },
      {
        "crit": "CRIT Guerrero",
        "recursos_necesarios": 45682834.03,
        "ingresos_comprometidos": 47565822.53,
        "porcentaje_cumplimiento": 0.85,
        "ingresos_esperados": 40430949.15,
        "minimo_necesario": 5251884.88,
        "capacidad_maxima": 997,
        "costo_anual_promedio": 45804.22,
        "capacidad_actual": 115
      },
      {
        "crit": "CRIT Michoacán",
        "recursos_necesarios": 37110265.01,
        "ingresos_comprometidos": 42900000,
        "porcentaje_cumplimiento": 0.25,
        "ingresos_esperados": 10725000,
        "minimo_necesario": 26385265.01,
        "capacidad_maxima": 997,
        "costo_anual_promedio": 37208.87,
        "capacidad_actual": 709
      },
      {
        "crit": "CRIT Baja California",
        "recursos_necesarios": 47326543.1,
        "ingresos_comprometidos": 46278388.8,
        "porcentaje_cumplimiento": 0.9,
        "ingresos_esperados": 41650549.92,
        "minimo_necesario": 5675993.18,
        "capacidad_maxima": 997,
        "costo_anual_promedio": 47452.29,
        "capacidad_actual": 120
      },
      {
        "crit": "Centro Autismo Teletón",
        "recursos_necesarios": 31100000,
        "ingresos_comprometidos": 25905527,
        "porcentaje_cumplimiento": 0.7,
        "ingresos_esperados": 18133868.9,
        "minimo_necesario": 12966131.1,
        "capacidad_maxima": 220,
        "costo_anual_promedio": 141363.64,
        "capacidad_actual": 92
      },
      {
        "crit": "Hospital Infantil de Oncología",
        "recursos_necesarios": 260376034.84,
        "ingresos_comprometidos": 114753864,
        "porcentaje_cumplimiento": 0.95,
        "ingresos_esperados": 109016170.8,
        "minimo_necesario": 151359864.04,
        "capacidad_maxima": 220,
        "costo_anual_promedio": 1183527.43,
        "capacidad_actual": 128
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('metadata', null, {});
  }
};