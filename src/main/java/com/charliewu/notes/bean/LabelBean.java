package com.charliewu.notes.bean;

/**
 * Created by Charlie Wu on 2017-02-11.
 */
public class LabelBean {

    private String label;
    private String value;

    //
    // constructors
    //
    public LabelBean(String label) {
        this.label = label;
        this.value = label;
    }

    //
    // getter and setters
    //
    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
