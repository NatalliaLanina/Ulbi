import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = (props) => {
  return (
    <div>
      <MyInput
        value={props.filter.query}
        onChange={event => props.setFilter({...props.filter, query: event.target.value})}
        placeholder='Search'
      />
      <MySelect
        value={props.filter.sort}
        onChange={selectedSort => props.setFilter({...props.filter, sort: selectedSort})}
        defaultValue='Sort by'
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'}
        ]}
      />
    </div>
  );
};

export default PostFilter;