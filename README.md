## This page is so responsive right meow.

---

####Key tools in building:

* Backbone for MV*
* Bootstrap for grid
* SASS for taking the sting out of CSS (sort of)
* Yeoman/Bower/Grunt for workflow

####Things to pay attention to:

* Page is responsive via window resizing as well as device breakpoints
* CSS "drawer" animations in footer when viewing on mobile or smaller width screen/window on desktop
* Blog posts are represented as Models (`BlogPost`) and rendered into self-managing Views (`BlogPostView` and `BlogPostViewExpanded`)
* Met designer's specifications of element placement (expanded blog posts, especially) in all breakpoints (see `BlogPostExpanded.initialize()` for primary logic)
* Cute cat .pngs (props to the designer)

*-Built by Jacob Wielgus*