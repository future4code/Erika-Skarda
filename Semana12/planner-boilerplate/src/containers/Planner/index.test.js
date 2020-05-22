import React from "react";
import { shallow } from "enzyme";
import { Planner } from "./";


//testando lifecycle
describe("Planner", () => {
  test("Checar getTask", () => {
    //Preparação
    const mockGetTasks = jest.fn();

    const renderedComponent = shallow(<Planner getTask = {mockGetTasks}/>)
      renderedComponent.instance().componentDidMount();
  //Verificação
    expect(mockGetTasks).toHaveBeenCalled();
    
  });

  test("Checar inputTask", () => {
    const mockGetTask = jest.fn()

    const mockEvent = { event: {
      target: { value : { 

      }

      }
    }}
  })
});

