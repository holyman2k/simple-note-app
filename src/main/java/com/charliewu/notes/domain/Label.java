package com.charliewu.notes.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by Charlie Wu on 2017-02-03.
 */
@Entity
public class Label {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private String name;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "note_id")
    private Note note;

    //
    // constructor
    //
    public Label(String name) {
        this.name = name;
    }

    public Label(String name, Note note) {
        this.name = name;
        this.note = note;
    }

    public Label() {
    }

    //
    // getter setter
    //
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Note getNote() {
        return note;
    }

    public void setNote(Note note) {
        this.note = note;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("id: ").append(getId()).append(", ").append("name: ").append(getName());
        return builder.toString();
    }
}
