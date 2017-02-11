package com.charliewu.notes.controllers.rest;

import com.charliewu.notes.bean.LabelBean;
import com.charliewu.notes.domain.Label;
import com.google.common.collect.Lists;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by Charlie Wu on 2017-02-11.
 */
@Component
public class LabelsHelper {

    public List<LabelBean> toLabelBeans(List<Label> labels) {

        List<LabelBean> list = Lists.newArrayList();

        for (Label label : labels) {

            list.add(new LabelBean(label.getName()));
        }

        return list;
    }
}
