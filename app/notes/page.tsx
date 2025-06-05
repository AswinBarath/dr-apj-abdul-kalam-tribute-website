"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Save, X, Search } from "lucide-react"

interface Note {
  id: string
  title: string
  content: string
  category: string
  createdAt: string
  updatedAt: string
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    category: "Personal",
  })

  const categories = ["Personal", "Quotes", "Biography", "Inspiration", "Lessons"]

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("kalam-notes")
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("kalam-notes", JSON.stringify(notes))
  }, [notes])

  const createNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const note: Note = {
        id: Date.now().toString(),
        title: newNote.title,
        content: newNote.content,
        category: newNote.category,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      setNotes([note, ...notes])
      setNewNote({ title: "", content: "", category: "Personal" })
      setIsCreating(false)
    }
  }

  const updateNote = (id: string, updates: Partial<Note>) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, ...updates, updatedAt: new Date().toISOString() } : note)),
    )
    setEditingId(null)
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">My Notes</h1>
          <p className="text-xl text-gray-600 mb-6">Capture your thoughts, favorite quotes, and reflections</p>
        </div>

        {/* Search and Add */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search your notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Note
          </Button>
        </div>

        {/* Create Note Form */}
        {isCreating && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Create New Note</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Note title..."
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              />
              <Textarea
                placeholder="Write your note here..."
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                rows={4}
              />
              <div className="flex items-center justify-between">
                <select
                  value={newNote.category}
                  onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
                  className="border rounded px-3 py-2"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="flex gap-2">
                  <Button onClick={createNote} size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" onClick={() => setIsCreating(false)} size="sm">
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notes Grid */}
        {filteredNotes.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchTerm
                  ? "No notes found matching your search."
                  : "No notes yet. Create your first note to get started!"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                isEditing={editingId === note.id}
                onEdit={() => setEditingId(note.id)}
                onSave={(updates) => updateNote(note.id, updates)}
                onCancel={() => setEditingId(null)}
                onDelete={() => deleteNote(note.id)}
                formatDate={formatDate}
                categories={categories}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface NoteCardProps {
  note: Note
  isEditing: boolean
  onEdit: () => void
  onSave: (updates: Partial<Note>) => void
  onCancel: () => void
  onDelete: () => void
  formatDate: (date: string) => string
  categories: string[]
}

function NoteCard({ note, isEditing, onEdit, onSave, onCancel, onDelete, formatDate, categories }: NoteCardProps) {
  const [editTitle, setEditTitle] = useState(note.title)
  const [editContent, setEditContent] = useState(note.content)
  const [editCategory, setEditCategory] = useState(note.category)

  const handleSave = () => {
    onSave({
      title: editTitle,
      content: editContent,
      category: editCategory,
    })
  }

  const handleCancel = () => {
    setEditTitle(note.title)
    setEditContent(note.content)
    setEditCategory(note.category)
    onCancel()
  }

  if (isEditing) {
    return (
      <Card>
        <CardContent className="p-4 space-y-4">
          <Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <Textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} rows={4} />
          <div className="flex items-center justify-between">
            <select
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="flex gap-2">
              <Button onClick={handleSave} size="sm">
                <Save className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={handleCancel} size="sm">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-2">{note.title}</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onEdit}>
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onDelete} className="text-red-500">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Badge variant="secondary" className="w-fit">
          {note.category}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 line-clamp-4 mb-4">{note.content}</p>
        <div className="text-sm text-gray-500">
          <p>Created: {formatDate(note.createdAt)}</p>
          {note.updatedAt !== note.createdAt && <p>Updated: {formatDate(note.updatedAt)}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
