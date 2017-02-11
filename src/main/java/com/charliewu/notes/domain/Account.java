package com.charliewu.notes.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by charliewu on 7/2/17.
 */
@Entity
public class Account {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private String username;

    @JsonIgnore
    private String password;

    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "account", cascade = CascadeType.REMOVE)
    private Set<Note> notes;

    //
    // constructor
    //

    public Account() {
    }

    public Account(String username, String password, String name) {
        this.username = username;
        this.password = password;
        this.name = name;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Note> getNotes() {
        return notes;
    }

    public void setNotes(Set<Note> notes) {
        this.notes = notes;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
