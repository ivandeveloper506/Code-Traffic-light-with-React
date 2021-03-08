/*******************************************************************************/
/* Fecha Creación: 07 Marzo 2021.                                              */
/* Autor:          Iván Fonseca Castro                                         */
/*                                                                             */
/* Descripción:   Archivo principal que permite compartir valores por medio de */
/*                constantes o variables en lugares comunes de la aplicación,  */
/*                si eventualmente algún valor debe cambiar en el tiempo, solo */
/*                se modifica en este archivo y se refleja en todos los        */
/*                lugares donde se utilice.                                    */
/*******************************************************************************/

export const SELECTEDLIGHT = "selectedLight";
export const REDLIGHT = "redLight";
export const YELLOWLIGHT = "yellowLight";
export const GREENLIGHT = "greenLight";
export const HIGHREDLIGHT = "highRedLight";
export const HIGHYELLOWLIGHT = "highYellowLight";
export const HIGHGREENLIGHT = "highGreenLight";
export const SELECTEDREDLIGHT = SELECTEDLIGHT + " highRedLight";
export const SELECTEDYELLOWLIGHT = SELECTEDLIGHT + " highYellowLight";
export const SELECTEDGREENLIGHT = SELECTEDLIGHT + " highGreenLight";
export const SECONDSCOUNTER = 1000;
