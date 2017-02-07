package com.charliewu.notes.bean;

import java.util.Set;

/**
 * Created by charliewu on 6/2/17.
 */
public class NoteBean {

    private long id;

    private String content;

    private Set<String> labels;

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

    public Set<String> getLabels() {
        return labels;
    }

    public void setLabels(Set<String> labels) {
        this.labels = labels;
    }

    @Override
    public String toString() {
        return "NoteBean{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", labels=" + labels +
                '}';
    }
}
