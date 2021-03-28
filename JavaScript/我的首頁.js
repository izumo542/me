var url ="me.json";            
            $.getJSON(url, function (data) {
                console.log(data);
                var name = $("#name");
                var intro = $("#intro");
                var skills = $("#skills");
                name.text(data.name);
                intro.text(data.intro);
                
                console.log(data.skills);
                // 讀取每一個 data 陣列的物
                $.each(data.skills, function (index){
                    s = data.skills[index];
                    console.log("第" + index + "項 = " + s);
                    $("<li></li>").text(s).appendTo(skills);
                });
            });
            
            