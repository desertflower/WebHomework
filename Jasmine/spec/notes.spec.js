/*
describe('notes module', function () {
  it('should be able to add a new note');
  it('should ignore blank notes');
  it('should ignore notes containing only whitespace');
  it('should require a string parameter');
});
*/


/*
describe('notes module', function () {
  beforeEach(function() {
    notes.clear();
    notes.add('first note');
    notes.add('second note');
    notes.add('third note');
    notes.add('fourth note');
    notes.add('fifth note');
  });
  it("should be able to add a new note", function () {
    expect(notes.add('sixth note')).toBe(true);
    expect(notes.count()).toBe(6);
  });
  it("should ignore blank notes", function () {
    expect(notes.add('')).toBe(false);
    expect(notes.count()).toBe(5);
  });
  it('should ignore notes containing only whitespace');
  it('should require a string parameter');
});
 */

describe("notes module", function () {

  beforeEach(function() {
    notes.clear();
    notes.add('first note');
    notes.add('second note');
    notes.add('third note');
    notes.add('fourth note');
    notes.add('fifth note');
  });

  describe('adding a note', function() {

    it('should be able to add a new note', function () {
      // tests go here
      expect(notes.add('sixth note')).toBe(true);
      expect(notes.count()).toBe(6);
    });

    it('should ignore blank notes', function () {
      // tests go here
      expect(notes.add('')).toBe(false);
      expect(notes.count()).toBe(5);
    });

    it('should ignore notes containing only whitespace', function() {
      expect(notes.add('   ')).toBe(false);
      expect(notes.count()).toBe(5);
      pending();
    });

    it('should require a string parameter', function(){
      expect(notes.add()).toBe(false);
      expect(notes.count()).toBe(5);
      pending();
    });
  });

  describe('deleting a note', function() {
    it('should be able to delete the first index', function(){
      var first = notes.list()[0];
      notes.remove(0)
      expect(notes.list()[0]).not.toEqual(first);
    });
    it('should be able to delete the last index', function(){
      var last = notes.list()[notes.list().length - 1];
      notes.remove(notes.list().length - 1)
      expect(notes.list()[notes.list().length - 1]).not.toEqual(last);
    });
    it('should return false if index is out of range', function(){
      expect(notes.remove(5)).toBeFalse();
    });
    it('should return false if the parameter is missing', function(){
      expect(notes.remove()).toBeFalse();
    });
  });

  describe('finding a note', function () {
    it('should return all notes with containing word', function () {
      var result = notes.find('th note');
      expect(result.length).toEqual(2);
      expect(result[0].text).toContain('th note');
      expect(result[1].text).toContain('th note');
    });
    it('should return empty array when no notes with containing word', function () {
      var result = notes.find('amal');
      expect(result.length).toEqual(0);
    });
  });
});