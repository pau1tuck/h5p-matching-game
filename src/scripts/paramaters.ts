/**
 * Stores the parameters of the content.json file.
 */
export default class Parameters {
  /**
   * Constructs a parameters object using the paramters passed to it.
   * Fills missing properties with default values.
   * @param parameters  the parameters whose values should be used (as received from H5P)
   */
  private taskDescription: string;
  private items: [string];
  private behavior: {};

  constructor(parameters) {
    // assign default values that are used as fallbacks
    this.taskDescription = "Explain the words.";
    this.items = ["Guess me!"];
    this.behavior = {
      customTime: false,
      timeLimit: 60,
      cardSelection: "forceAll",
      itemCount: 10,
      randomOrder: true,
      showInstructions: true,
      allowRetry: true,
    };

    // assign actual values coming from the content.json file
    this._assignValueIfDefined(this, parameters, "taskDescription");
    this._assignValueIfDefined(this, parameters, "items");
    if (parameters !== undefined && parameters.behavior !== undefined) {
      this._assignValueIfDefined(
        this.behavior,
        parameters.behavior,
        "customTime",
      );
      this._assignValueIfDefined(
        this.behavior,
        parameters.behavior,
        "timeLimit",
      );
      this._assignValueIfDefined(
        this.behavior,
        parameters.behavior,
        "cardSelection",
      );
      this._assignValueIfDefined(
        this.behavior,
        parameters.behavior,
        "itemCount",
      );
      this._assignValueIfDefined(
        this.behavior,
        parameters.behavior,
        "randomOrder",
      );
      this._assignValueIfDefined(
        this.behavior,
        parameters.behavior,
        "showInstructions",
      );
      this._assignValueIfDefined(
        this.behavior,
        parameters.behavior,
        "allowRetry",
      );
    }
  }

  /**
   * Assigns the value of the property on the source object to a property on the target object if the property
   * exists on the source object
   * @param {object} target The object TO which the property is copied
   * @param {object} source The object FROM which the property is copied
   * @param {string} propertyName The name of the property to copy
   */
  _assignValueIfDefined(target, source, propertyName) {
    if (source !== undefined && source[propertyName] !== undefined) {
      target[propertyName] = source[propertyName];
    }
  }
}
