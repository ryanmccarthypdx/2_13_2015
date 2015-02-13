describe('triangle', function() {
  it("returns 'n impossible' if input is not a triangle", function() {
    expect(triangle([1,1,12])).to.equal("n impossible")
  });

  it("returns 'n equilateral' for equilateral triangle", function() {
    expect(triangle([2,2,2])).to.equal("n equilateral")
  });

  it("returns 'n isosceles' for isosceles triangle", function() {
    expect(triangle([2,3,2])).to.equal("n isosceles")
  });

  it("returns ' scalene' for all other triangles", function() {
    expect(triangle([3,4,5])).to.equal(" scalene")
  });
});
