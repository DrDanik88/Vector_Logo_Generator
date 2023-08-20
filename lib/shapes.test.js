const shapes = require('./shapes');
const { circle, triangle, square } = shapes;


describe('shapes', () => {
  //test to make sure each shapes can change color using the attribute ShapeColor
  test('circle shape has correct fill attribute', () => {
    expect(circle).toContain('fill="ShapeColor"');
  });

  test('triangle shape has correct fill attribute', () => {
    expect(triangle).toContain('fill="ShapeColor"');
  });

  test('square shape has correct fill attribute', () => {
    expect(square).toContain('fill="ShapeColor"');
  });
  //test to make sure each shape has the correct size
  test('circle shape has correct size', () => {
    expect(circle).toContain('circle cx="150" cy="100" r="80"');
  });

  test('triangle shape has correct size', () => {
    expect(triangle).toContain('polygon points="150, 18 244, 182 56, 182"');
  });

  test('square shape has correct size', () => {
    expect(square).toContain('rect x="100" y="50" width="300" height="300"');
  });

});
