import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
    {
        name: 'main',
        text: 'MAIN'
    },
    {
        name: 'mypage',
        text: 'MY PAGE'
    },
    {
        name: 'networking',
        text: 'NETWORKING'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 3.5rem;
    width: 865px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 865px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.5rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #565E66;
    }

    &.active {
        font-weight: 800;
        border-bottom: 3px solid #6E2FC7;
        color: #6E2FC7;
        &:hover {
            color: #A465FD;
        }
    }

    &+& {
        margin-left: 6.5rem;
    }
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c.name}
                    activeClassName="active"
                    exact={c.name === 'all'}
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;