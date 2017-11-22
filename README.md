# selectOptionWithCallback

In every situation when a option tag is selected you get a validate value or you can call an optional callback method.

JQuery is required.

## Example

```code

selectedIndex(selectElement, callback)

With test parameter

selectedIndex("select");

selectedIndex("#data");

selectedIndex(".data");

selectedIndex("select[name='data']");

selectedIndex("select", function(){
    alert("Hi");
});

selectedIndex("#data", function(){
    alert("Hi");
});

selectedIndex(".data", function(){
    alert("Hi");
});

selectedIndex("select[name='data']", function(){
    alert("Hi");
});

```