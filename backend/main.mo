import Func "mo:base/Func";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  // Stable variable to store company values
  stable var companyValues : [Text] = ["Josh is the best"];

  // Function to add a new company value
  public func addValue(value : Text) : async () {
    companyValues := Array.append(companyValues, [value]);
  };

  // Function to get all company values
  public query func getValues() : async [Text] {
    companyValues
  };
}
