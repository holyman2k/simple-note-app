$(document).ready(function () {

    var table = $("<table class='table table-bordered table-hover'></table>");
    $("#list").append(table);

    table.append($("<tr><th>Notes</th><th>Labels</th><th></th></tr>"));

    $.get("/rest/notes/", function (data) {
        data.map(function (item) {
            var labels = item.labels.map(function (label) {
                return label.name
            })
            var content = $("<td class='col-sm-7'>" + item.content + "</td>");
            var labels = $("<td class='col-sm-5'>" + labels.join(", ") + "</td>");

            var labels = $("<td class='col-sm-5'><a class='edit' href='#'>Edit</a> <a class='delete' href='#'>Delete</a></td>");
            var row = $("<tr data-id='" + item.id + "'></tr>");
            row.append(content);
            row.append(labels);
            table.append(row);
        });
    });

    $("#list").on("click", "tr > td > .edit", function () {
        var id = $(this).parent().parent().data("id");
        console.log(id);
    });

    $("#list").on("click", "tr > td > .delete", function () {
        var id = $(this).parent().parent().data("id");
        console.log(id);
    })
});

