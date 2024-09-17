export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addValue' : IDL.Func([IDL.Text], [], []),
    'getValues' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
