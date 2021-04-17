$(window).on('load', function() {
  var tags = [
      {
        type: "input",
        tag: "text",
        name: "name",
        "chat-msg": "Hi, What's your name ?"
      },
      {
        type: "input",
        tag: "radio",
        name: "gender",
        "chat-msg": "Nice to meet you, {{name}}! Pick your gender !",
        children: [
          {
            value: "Male",
            text: "Male",
          },
          {
            value: "Female",
            text: "Female",
          },
          {
            value: "Custom",
            text: "Custom",
          }
        ]
      },
      {
        type: "input",
        tag: "checkbox",
        name: "game",
        "chat-msg": "Nice to meet you, {{name}}! Pick your favourite games !",
        children: [
          {
            value: "Football",
            text: "Football",
          },
          {
            value: "Cricket",
            text: "Cricket",
          },
          {
            value: "Custom",
            text: "Chess",
          }
        ]
      },
      {
        type: "input",
        tag: "custom",
        name: "custom_tag",
        submitBarStyle: 'full-submit',
        "chat-msg": 'Drag the relevant products from the "Products" column to the appropriate time slot. You can leave products that are not tied to a day in the column "Products" .',
        renderer: customTagRender,
        retriever: function() {
          $('#custom-input').remove();
          return {
            data: window.customData,
            friendly: "I wanna buy those products !"}
        },
      },
      {
        type: "msg",
        submitBarStyle: 'full-submit',
        "chat-msg": "This will be good bye message !"
      }
  ];

  function customTagRender () {
    var html  = '';
        html += '<div class="container-fluid" style=" padding: 0 0 168px 0;">';
        html += '<div class="col s3 m3">';
        html += '<h5 class="h6"><strong>Producten</strong></h5>'
        html += '<div id="sortablelist" class="list-group mb-4 mt-3" data-id="1">'
        html += '<div class="list-group-item d-flex align-items-center justify-content-between" data-id="2">'
        html += '<div>'
        html += '<p draggable="true" ondrop="myFunc(1, this.innerHTML)" class="mb-0 d-inline-flex align-items-center">'
        html += 'List Item 1</p>'
        html += '</div>'
        html += '</div>'
        html += '<div class="list-group-item d-flex align-items-center justify-content-between" data-id="3">'
        html += '<div>'
        html += '<p draggable="true" ondrop="myFunc(2, this.innerHTML)" class="mb-0 d-inline-flex align-items-center">'
        html += 'List Item 2</p>'
        html += '</div>'
        html += '</div>'
        html += '<div class="list-group-item d-flex align-items-center justify-content-between" data-id="4" style="">'
        html += '<div>'
        html += '<p draggable="true" ondrop="myFunc(3, this.innerHTML)" class="mb-0 d-inline-flex align-items-center">'
        html += 'List Item 3</p>'
        html += '</div>'
        html += '</div>'
        html += '</div>'
        html += '</div>'
    
        html += '<div class="col s3 m3">'
        html += '<h5 class="h6"><strong>Ochtend</strong></h5>'
        html += '<div id="sortablelist2" class="list-group mb-4 mt-3" data-id="1">'
        html += '</div>'
        html += '</div>'
        html += '<div class="col s3 m3">'
        html += '<h5 class="h6"><strong>Middag</strong></h5>'
        html += '<div id="sortablelist3" class="list-group mb-4 mt-3" data-id="1">'
        html += '</div>'
        html += '</div>'
        html += '<div class="col s3 m3">'
        html += '<h5 class="h6"><strong>Avond</strong></h5>'
        html += '<div id="sortablelist4" class="list-group mb-4 mt-3" data-id="1">'
        html += '</div>'
        html += '</div>'
        html += '<div class="col s12 m12">'
        html += '</div>'
        html += '<script>'
        html += ' new Sortable(sortablelist, {'
        html += 'animation: 150,'
        html += 'group: {'
        html += 'name: "shared"'
        html += '}'
        html += '});'
        html += 'new Sortable(sortablelist2, {'
        html += 'animation: 150,'
        html += 'group: {'
        html += 'name: "shared"'
        html += '}'
        html += '});'
        html += 'new Sortable(sortablelist3, {'
        html += 'animation: 150,'
        html += 'group: {'
        html += 'name: "shared"'
        html += '}'
        html += '});'
        html += 'new Sortable(sortablelist4, {'
        html += 'animation: 150,'
        html += 'group: {'
        html += 'name: "shared"'
        html += '}'
        html += '});'
        html += 'var myArray = [];'
        html += 'function myFunc(number, innerHTML) {'
        html += 'if(myArray.includes(innerHTML)){}'
        html += 'else{'
        html += 'if (number == 1) {'
        html += 'var first = innerHTML;'
        html += 'myArray.push(first)'
        html += '}'
        html += '}'
        html += 'if(myArray.includes(innerHTML)){}'
        html += 'else{'
        html += 'if (number == 2) {'
        html += 'var second = innerHTML;'
        html += 'myArray.push(second)'
        html += '}'
        html += '}'
        html += 'if(myArray.includes(innerHTML)){}'
        html += 'else{'
        html += 'if (number == 3) {'
        html += 'var third = innerHTML;'
        html += 'myArray.push(third)'
        html += '}'
        html += '}'
        html += 'alert("You selected " + myArray)'
        html += '}'
        html += '</script>'

      $('#ui-control').prepend('<div id="custom-input">' + html +'</div>');
          window.customData = "the possibilities are endless!";
      }
      $(document).ready(function() {
          Chat.start($('#chat-context'), tags);
      });
});