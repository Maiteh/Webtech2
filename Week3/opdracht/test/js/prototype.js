var IMDelement = function (element) 
    {
        this.element = element;
        this.isArray = (element.length > 1) ? true : false;
    }


IMDelement.prototype.color = function (p_color) 
    {
        if (this.isArray) 
            {
                for (var i = 0, l = this.element.length; i < l; i++) 
                {
                    this.element[i].style['color'] = p_color;
                }
            } 
        else 
            {
                this.element.style['color'] = p_color;
            }
        return this.element;
    }


IMDelement.prototype.addClass = function (p_class) 
    {   
        if (this.isArray) 
            {
                for (var i = 0, l = this.element.length; i < l; i++) 
                {
                this.element[i].className = p_class;
                }
            } 
        else 
            {
                this.element.className = p_class;
            }
        return this.element;
    }


IMDelement.prototype.click = function (action) 
    {
        if (this.isArray) 
            {
                for (var i = 0, l = this.element.length; i < l; i++) 
                {
                this.element[i].addEventListener('click', action);
                }
            } 
        else 
            {
            this.element.addEventListener('click', action);
            }
    }


var $ = function (p_element) 
    {
        if (typeof (p_element) == "object") 
        {
            return new IMDelement(p_element);
        }
   
    var firstCharacter = p_element.charAt(0);
    var result;


    switch (firstCharacter) 
    {
        case "#":
            var idToSelect = p_element.substring(1, p_element.length);
            var element = document.getElementById(idToSelect);
            result = new IMDelement(element);
            break;


        case ".":
            var classToSelect = p_element.substring(1, p_element.length);
            var elements = document.getElementsByClassName(classToSelect);
            result = new IMDelement(elements);
            break;


        default:
            var elements = document.getElementsByTagName(p_element);
            result = new IMDelement(elements);
            break;
    }
    return result;
};


// EIGEN CODE


$("li").click(function ()
    {
        $(this).addClass("done");
    });


$("#mark").click(function()
    {
        $("li").addClass("done"); 
    });
        
$("li#todoItem1").addClass("done");
