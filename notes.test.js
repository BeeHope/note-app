// File: notes.test.js
// Automated tests for Notes App

const { getAllNotes, addNote, deleteNote, resetNotes } = require("./notes");

beforeEach(() => {
    resetNotes();
});

test("Should add a new note", () => {
    const note = addNote("Study DevSecOps");

    expect(note).toHaveProperty("id");
    expect(note.content).toBe("Study DevSecOps");
    expect(getAllNotes()).toHaveLength(1);
});

test("Should not add an empty note", () => {
    expect(() => addNote("")).toThrow();
    expect(() => addNote("   ")).toThrow();
});

test("Should delete an existing note", () => {
    const note = addNote("Buy milk");
    deleteNote(note.id);

    expect(getAllNotes()).toHaveLength(0);
});

test("Should throw error if note does not exist", () => {
    expect(() => deleteNote(999)).toThrow("Note not found");
});

test("Should return all notes", () => {
    addNote("Note 1");
    addNote("Note 2");

    expect(getAllNotes()).toHaveLength(2);
});