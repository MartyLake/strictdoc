import docutils.nodes
import docutils.parsers.rst
import docutils.utils
import docutils.frontend

from docutils.parsers.rst import directives

from strictdoc.backend.meta import ASCMetaDirective


def parse_rst(text: str) -> docutils.nodes.document:
    parser = docutils.parsers.rst.Parser()
    components = (docutils.parsers.rst.Parser,)
    settings = docutils.frontend.OptionParser(components=components).get_default_values()

    document = docutils.utils.new_document('<rst-doc>', settings=settings)
    parser.parse(text, document)
    return document


class MyVisitor(docutils.nodes.NodeVisitor):
    def visit_reference(self, node: docutils.nodes.reference) -> None:
        """Called for "reference" nodes."""
        print("REFERENCE")
        print(node)

    def unknown_visit(self, node: docutils.nodes.Node) -> None:
        """Called for all other node types."""
        print("unknown_visit:")
        print(node)
        pass


directives.register_directive("aws-meta", ASCMetaDirective)


def dump(input_rst):
    doc = parse_rst(input_rst)
    visitor = MyVisitor(doc)
    doc.walk(visitor)
