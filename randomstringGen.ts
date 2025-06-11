class HashGenerator {
  private readonly lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  private readonly upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly numbers = '0123456789';
  private readonly defaultChars =
    this.lowerCase + this.upperCase + this.numbers;

  private getRandomChar(source: string): string {
    return source[Math.floor(Math.random() * source.length)];
  }

  private generateFromSource(length: number, source: string): string {
    if (length <= 0) return 'Length must be more than 0';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += this.getRandomChar(source);
    }
    return result;
  }
  //generate
  public generate(length: number = 5): string {
    return this.generateFromSource(length, this.defaultChars);
  }
  //uppercase
  public uppercase(length: number = 5): string {
    return this.generateFromSource(length, this.upperCase);
  }

  //lowercase
  public lowercase(length: number = 5): string {
    return this.generateFromSource(length, this.lowerCase);
  }

  // numeric
  public numeric(length: number = 5): string {
    return this.generateFromSource(length, this.numbers);
  }
  // uuid
  public uuid(): string {
    return [
      this.generate(4),
      this.generate(4),
      this.generate(4),
      this.generate(4),
    ].join('-');
  }

  // custom source
  public custom(length: number = 5, source: string = ''): string {
    if (!source) return 'Please provide a custom character set';
    return this.generateFromSource(length, source);
  }
}

const hashClass = new HashGenerator();
export default hashClass;
