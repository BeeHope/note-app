// File: app.js
// Express web server for Notes App

const express = require("express");
const { getAllNotes, addNote, deleteNote } = require("./notes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static frontend
app.use(express.static("public"));


// ROUTE 1: Get all notes
// GET /api/notes
app.get("/api/notes", (req, res) => {
    try {
        const notes = getAllNotes();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// ROUTE 2: Add a note
// POST /api/notes
app.post("/api/notes", (req, res) => {
    try {
        const { content } = req.body;
        const newNote = addNote(content);
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// ROUTE 3: Delete a note
// DELETE /api/notes/:id
app.delete("/api/notes/:id", (req, res) => {
    try {
        deleteNote(req.params.id);
        res.status(200).json({ message: "Note deleted" });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});


// Start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;