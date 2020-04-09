describe("A Simple Door Factory", () => {
  it("should build a door with the provided width, height and material", () => {
    const width = 2;
    const height = 8;
    const type = "basic";

    const door = buildADoor(width, height, type);

    expect(door.width).toBe(2);
    expect(door.height).toBe(8);
    expect(door.material).toBe("wood");
  });
});

const buildADoor = (width, height, type) => {
  return new BasicDoor(width, height);
};

class BasicDoor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.material = "wood";
  }
}
