import ServerlessOfflineElasticMqPlugin from "../index";

const serverless: any = {
  getProvider: () => ({}),
};

describe("Serverless Plugin DynamoDB Offline", () => {
  test("Should meet Serverless Plugin Interface", () => {
    const plugin = new ServerlessOfflineElasticMqPlugin(serverless);
    expect(plugin.hooks).toEqual({
      "before:offline:start:end": expect.any(Function),
      "before:offline:start": expect.any(Function),
    });
  });
});
