describe('triangle', function() {
  it("returns false if input is not a triangle", function() {
    expect(triangle([1,1,12])).to.equal(false)
  });

  it("returns 'equilateral' for equilateral triangle", function() {
    expect(triangle([2,2,2])).to.equal("equilateral")
  });

  it("returns 'isosceles' for isosceles triangle", function() {
    expect(triangle([2,3,2])).to.equal("isosceles")
  });
});
