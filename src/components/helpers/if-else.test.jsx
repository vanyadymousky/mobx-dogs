import { IfElse } from './if-else';


describe('<IfElse />', () => {
  let wrapper;

  describe('when condition is true', () => {
    const condition = true;

    test('should render first element', () => {
      wrapper = shallow(<IfElse condition={condition}><span>first</span><span>second</span></IfElse>);

      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('when condition is false', () => {
    const condition = false;

    test('should render second element', () => {
      wrapper = shallow(<IfElse condition={condition}><span>first</span><span>second</span></IfElse>);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when children length is more than 2', () => {
    const condition = false;

    test('should ignore 3,4,5... elements', () => {
      wrapper = shallow(<IfElse condition={condition}><span>first</span><span>second</span><span>third</span></IfElse>);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
