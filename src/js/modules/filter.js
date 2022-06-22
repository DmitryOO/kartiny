const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markGuy = wrapper.querySelectorAll('.guy'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef =wrapper.querySelectorAll('.chef'),
        no = document.querySelector('.portfolio-no'),
        arrPics = [
          [btnAll,markAll],
          [btnLovers,markLovers],
          [btnChef,markChef],
          [btnGirl,markGirl],
          [btnGranddad,''],
          [btnGrandmother,''],
          [btnGuy,markGuy]
        ];


  const markFilter = (markType) => {
    markAll.forEach (mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if(markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };
  const showPics = (selector, pics)=> {
    selector.addEventListener('click', () => {
      markFilter(pics);
    });
  };
  arrPics.forEach((item)=>{
    let func = showPics(item[0],item[1]);
    item[0].addEventListener('click', func);
  });
  // showPics(btnAll, markAll);
  // showPics(btnLovers, markLovers);

  // btnAll.addEventListener('click', () => {
  //   markFilter(markAll);
  // });
  // btnLovers.addEventListener('click', () => {
  //   markFilter(markLovers);
  // });
  // btnChef.addEventListener('click', () => {
  //   markFilter(markChef);
  // });
  // btnGirl.addEventListener('click', () => {
  //   markFilter(markGirl);
  // });
  // btnGuy.addEventListener('click', () => {
  //   markFilter(markGuy);
  // });
  // btnGrandmother.addEventListener('click', () => {
  //   markFilter();
  // });
  // btnGranddad.addEventListener('click', () => {
  //   markFilter();
  // });

  menu.addEventListener('click', (e) => {
    let target = e.target;
    e.preventDefault();
    if(target && target.tagName == 'LI') {
      items.forEach((item)=>{
        item.classList.remove('active');
      });
      target.classList.add('active');
    }
  });
};

export default filter;