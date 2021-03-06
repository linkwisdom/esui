define(function (require) {
    var Panel = require('esui/Panel');
    var esui = require('esui');

    describe('Panel', function () {
        describe('created via script', function () {
            it('should create a `<div>` element if `tagName` is not specified', function () {
                var panel = new Panel();
                panel.appendTo(container);
                expect(panel.main.nodeName.toLowerCase()).toBe('div');
            });

            it('should create a specified element if `tagName` is given', function () {
                var panel = new Panel({ tagName: 'section' });
                panel.appendTo(container);
                expect(panel.main.nodeName.toLowerCase()).toBe('section');
            });
        });

        describe('created via HTML', function () {
            var panel;
            beforeEach(function () {
                var html = '<section data-ui="type: Panel;id: test;">Hello World</section>';
                container.innerHTML = html;
                esui.init(container);
                panel = esui.getViewContext().get('test');
            });

            it('should be able to create from HTML', function () {
                expect(panel).toBeDefined();
            });

            it('should read `tagName` from HTML element', function () {
                expect(panel.get('tagName')).toBe('section');
            });

            it('should read the correct text from HTML element', function () {
                expect(container.innerHTML).toContain('Hello World');
            });
        });

        describe('generally', function () {
            it('should set html directly when calling `setContent`', function () {
                var panel = new Panel();
                panel.appendTo(container);
                panel.setContent('<span>Hello World</span>');
                expect(container.getElementsByTagName('span').length).toBeGreaterThan(0);
            });
        });
    });
});