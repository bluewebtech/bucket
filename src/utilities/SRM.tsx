export default class SRM {
  /**
   * SRM to EBC
   * EBC = SRM * 1.97
   */
  srmToEBC(srm: number): number {
    return srm * 1.97
  }

  /**
   * SRM to Lovibond
   * Lovibond = (SRM + 0.76) / 1.3546
   */
  srmToLovibond(srm: number): number {
    return (srm + 0.76) / 1.3546;
  }

  /**
   * EBC to SRM
   * SRM = EBC * 0.508
   */
  ebcToSrm(ebc: number): number {
    return ebc * 0.508;
  }

  /**
   * Lovibond to SRM
   * SRM = (1.3546 * Lovibond) – 0.76
   */
  lovibondToSrm(lovibond: number): number {
    return (1.3546 * lovibond) - 0.76;
  }

  srmToRgb(srm: number): { r: number, g: number, b: number} {
    return {
      r: Math.round(Math.min(255, Math.max(0, 255 * Math.pow(0.975, srm)))),
      g: Math.round(Math.min(255, Math.max(0, 245 * Math.pow(0.88, srm)))),
      b: Math.round(Math.min(255, Math.max(0, 220 * Math.pow(0.7, srm)))),
    };
  }

  colorToHex(color: number): string {
    const hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? '0' + hexadecimal : hexadecimal;
  }

  convertRGBtoHex(red: number, green: number, blue: number): string {
    return "#" + this.colorToHex(red) + this.colorToHex(green) + this.colorToHex(blue);
  }

  srmRGBToHex(srm: number): string {
    const rgb = this.srmToRgb(srm);
    return this.convertRGBtoHex(rgb.r, rgb.g, rgb.b);
  }

  /**
   * Remove the local storage item.
   */
  get(): void {
    console.log('SRM.get');
  }

  // MCU = (grain weight * lovibond color) / Volume in Gallons of recipe
  // SRM Color = 1.49 * (MCU * 0.69)
  mcuToSRM(mcus: {lovibond: number, weight: number}[], volume: number): void {
    let mcuTotal: number = 0.0;

    mcus.forEach((mcu) => mcuTotal += ((mcu.weight) * mcu.lovibond) / volume);

    const srm: number = 1.4922 * Math.pow(mcuTotal / volume, 0.6859);
    // const floor = Math.floor(srm);
    // const ceil = Math.ceil(srm);
    // const floorRGB = this.srmToRgb(floor);
    // const ceilRGB = this.srmToRgb(ceil);
    const floorHex = this.srmRGBToHex(srm);
    const ceilHex = this.srmRGBToHex(srm);

    console.log(mcuTotal, srm, floorHex, ceilHex);
  }
}
