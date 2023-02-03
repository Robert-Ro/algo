#[derive(Debug)]
struct Node<T> {
    val: T,
    next: Option<Box<Node<T>>>,
}
#[derive(Debug)]
struct LinkedList<T> {
    head: Option<Box<Node<T>>>,
}

impl<T> LinkedList<T> {
    fn new(val: T) -> Self {
        Node { val: T, next: None }
    }
}
fn main() {
    let node = Node { val: 2, next: None };
    println!("{:?}", node);
}
