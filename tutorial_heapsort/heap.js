/*|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\

    Heap Sort Stencil | JavaScript support functions

    Quick JavaScript Code-by-Example Tutorial 
     
    @author ohseejay / https://github.com/ohseejay
                     / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Michigan Honor License 

|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/*/


// create empty object 
minheaper = {}; 

// define insert function for min binary heap
function minheap_insert(heap, new_element) {
  var childIndex = heap.length;
  var parentIndex = Math.floor((childIndex -1)/2);
    
  heap.push(new_element);
  while (childIndex > 0 && heap[childIndex] < heap[parentIndex]){
    var temp = heap[childIndex];
    heap[childIndex] = heap[parentIndex];
    heap[parentIndex] = temp;
    childIndex = parentIndex;
    parentIndex = Math.floor((childIndex - 1)/2);
    // STENCIL: implement your min binary heap insert operation
  }
}
// assign insert function within minheaper object
minheaper.insert = minheap_insert;
/* Note: because the minheap_insert function is an object, we can assign 
      a reference to the function within the minheap object, which can be called
      as minheap.insert
*/

// define extract function for min binary heap
function minheap_extract(heap) {
  var smallest = heap[0];
  if (heap.length == 1){
    heap.splice(0,1);
  }else if (heap.length > 1){
    heap[0] = heap[heap.length];
    heap.splice(heap.length, 1);
    if (heap.length == 2){
      if (heap[0] < heap[1]){
        var swap = heap[0];
        heap[0] = heap[1];
        heap[1] = swap;
      }
      return smallest;
    }
  }    
  var parentIndex = 0;
  var leftChildIndex = (parentIndex * 2) + 1;
  var rightChildIndex = (parentIndex * 2) + 2;
  while (heap[leftChildIndex] < heap[parentIndex] || heap[rightChildIndex] < heap[parentIndex]){
    if (heap[leftChildIndex] < heap[rightChildIndex]){
      var temp = heap[leftChildIndex];
      heap[leftChildIndex] = heap[parentIndex];
      heap[parentIndex] = temp;
      parentIndex = leftChildIndex;
      leftChildIndex =  (parentIndex * 2) + 1;
      rightChildIndex = (parentIndex * 2) + 2;
    }
    else if (heap[rightChildIndex] < heap[leftChildIndex]){
      var temp = heap[rightChildIndex];
      heap[rightChildIndex] = heap[parentIndex];
      heap[parentIndex] = temp;
      parentIndex = rightChildIndex;
      leftChildIndex =  (parentIndex * 2) + 1;
      rightChildIndex = (parentIndex * 2) + 2;
    }
    else { 
        return null;
    }
  }
  return smallest;                       
    // STENCIL: implement your min binary heap extract operation
}

// assign extract function within minheaper object
minheaper.extract = minheap_extract;
    // STENCIL: ensure extract method is within minheaper object






