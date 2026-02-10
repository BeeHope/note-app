// File: notes.js
// This file manages the logic of our Notes application

// Array to store notes (in memory)
let notes = [];

// Function to get all notes
function getAllNotes() {
    return notes;
}

// Function to add a new note
function addNote(content) {

    // Validation: content must not be empty
    if (!content || content.trim() === '') {
        throw new Error("Note content cannot be empty");
    }

    // Create a new note object
    const newNote = {
        id: Date.now(),
        content: content.trim(),
        createdAt: new Date()
    };

    // Add note to array
    notes.push(newNote);

    return newNote;
}

// Function to delete a note
function deleteNote(id) {

    const index = notes.findIndex(note => note.id === parseInt(id));

    if (index === -1) {
        throw new Error("Note not found");
    }

    notes.splice(index, 1);

    return true;
}

// Reset notes (useful for tests)
function resetNotes() {
    notes = [];
}

// Export functions
module.exports = {
    getAllNotes,
    addNote,
    deleteNote,
    resetNotes
};