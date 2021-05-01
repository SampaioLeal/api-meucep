export default class CustomError extends Error {
  public error: string;

  constructor(customMessage: string, errorMessage?: string) {
    super(customMessage);
    this.name = 'CustomError';
    this.error = errorMessage || '';
  }
}
