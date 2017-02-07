package com.charliewu.notes.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.common.collect.Lists;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
public class Note implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    @Column(columnDefinition = "TEXT")
    private String content;

    @OneToMany(mappedBy = "note", cascade = CascadeType.REMOVE)
    private Set<Label> labels;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    //
    // constructor
    //
    public Note() {}

    public Note(String content, Account account) {
        this.content = content;
        this.account = account;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Set<Label> getLabels() {
        return labels;
    }

    public void setLabels(Set<Label> labels) {
        this.labels = labels;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    //
    // toString
    //
    @Override
    public String toString() {

        List<String> labels = Lists.newArrayList();

        for (Label label : getLabels()) {
            labels.add(label.toString());
        }

        StringBuilder builder = new StringBuilder();
        builder.append("id: ").append(getId()).append(", ").append("name: ").append(getContent()).append(", labels: (")
        .append(String.join(", ", labels)).append(")");

        return builder.toString();
    }
}